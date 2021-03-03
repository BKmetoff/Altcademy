import React, { useRef, useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { CurrentUserContext } from '../components/App'
import LogInError from './LogInError'

import { Wrapper } from '../backbone/Container'
import Image from '../backbone/Image'
import Button from '../backbone/Button'

const ImageContainer = styled(Wrapper)`
	overflow-y: hidden;
	margin: auto;
`

const ImageWrapper = styled.div`
	width: 75%;
	margin: auto;
`

export default function CheckGuitar({
	state,
	nextState,
	stateMachine,
	loadModel,
	model,
	checkLoggedIn,
}) {
	const { userLoggedInStatus } = useContext(CurrentUserContext)

	const [imageURL, setImageURL] = useState(null)
	const [isGuitar, setIsGuitar] = useState(false)
	const [predictionResults, setPredictionResults] = useState([])

	const imageRef = useRef()
	const inputRef = useRef()

	const { showImage = false, showResults = false } = stateMachine.states[state]

	const buttonProps = {
		initial: { text: 'Load', action: loadModel },
		loadingModel: { text: 'Loading Magic...', action: () => {} },
		awaitingUpload: {
			text: 'Loaded. Upload photo',
			action: () => inputRef.current.click(),
		},
		ready: { text: 'Go!', action: () => identify() },
		classifying: { text: 'Working...', action: () => {} },
		complete: { text: 'Reset!', action: () => reset() },
	}

	const handleUpload = (e) => {
		const { files } = e.target
		if (files.length > 0) {
			const url = URL.createObjectURL(files[0])
			setImageURL(url)
			nextState()
		}
	}

	const identify = async () => {
		nextState()

		const results = await model.classify(imageRef.current)
		setPredictionResults(results)

		const isGuitarCheck = (resultsElement) => {
			return resultsElement.className.includes('guitar')
		}

		setIsGuitar(results.some(isGuitarCheck))
		nextState()
	}

	const reset = () => {
		setPredictionResults([])
		setImageURL(null)
		nextState()
	}

	useEffect(() => {
		checkLoggedIn()
	}, [])

	if (!userLoggedInStatus.loggedIn && !userLoggedInStatus.user.user_id) {
		return <LogInError />
	}

	return (
		<ImageContainer alignCenter column>
			{console.log(state, isGuitar)}

			<input
				type='file'
				accept='image/*'
				capture='camera'
				ref={inputRef}
				onChange={handleUpload}
				hidden
			/>

			{showImage && (
				<ImageWrapper>
					<Image
						imageCheckGuitar
						alt='upload-preview'
						src={imageURL}
						ref={imageRef}
					/>
				</ImageWrapper>
			)}

			{showResults && (
				<div>{isGuitar ? 'It is a guitar.' : 'It is not a guitar'}</div>
			)}

			<Button kind='primary' onClick={buttonProps[state].action}>
				{buttonProps[state].text}
			</Button>
		</ImageContainer>
	)
}
