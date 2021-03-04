import React, { useRef, useState, useContext, useEffect } from 'react'
import styled from 'styled-components'

import { CurrentUserContext } from '../components/App'
import LogInError from './LogInError'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'

import { Wrapper } from '../backbone/Container'
import Image from '../backbone/Image'
import Button from '../backbone/Button'
// const config = require('config')

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
	const [predictionResults, setPredictionResults] = useState([])
	const [attemptSaved, setAttemptSaved] = useState(false)
	const [guitarInfo, setGuitarInfo] = useState({
		isGuitar: false,
		guitarCloudUrl: '',
	})

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

	const handleUpload = async (e) => {
		const { files } = e.target
		if (files.length > 0) {
			const url = URL.createObjectURL(files[0])

			const imageData = new FormData()
			imageData.append('file', e.target.files[0])
			imageData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_TEMPLATE)
			// imageData.append('upload_preset', 'is-it-a-guitar')

			const response = await fetch(
				`https://api.cloudinary.com/v1_1/${process.env.CLOUDNAME}/image/upload`,
				// `https://api.cloudinary.com/v1_1/dzdwgxbjl/image/upload`,
				{
					method: 'POST',
					body: imageData,
				}
			)

			const data = await response.json()
			setGuitarInfo({ ...guitarInfo, guitarCloudUrl: data.secure_url })

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

		setGuitarInfo({
			...guitarInfo,
			isGuitar: results.some(isGuitarCheck),
		})

		// save attempt to DB
		fetch(
			'/api/attempts',
			safeCredentials({
				method: 'POST',
				body: JSON.stringify({
					attempt: {
						user_id: userLoggedInStatus.user.user_id,
						success: results.some(isGuitarCheck),
						image_url: guitarInfo.guitarCloudUrl,
					},
				}),
			})
		)
			.then(handleErrors)
			.then((data) => {
				console.log(data)
				data.attempt.id && setAttemptSaved(true)
			})
			.catch((error) => console.log('save to DB error: ', error))

		nextState()
	}

	const reset = () => {
		setPredictionResults([])
		setImageURL(null)
		setGuitarInfo({ isGuitar: false, guitarCloudUrl: '' })
		setAttemptSaved(false)
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
			{console.log(state, guitarInfo)}

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
				<div>
					{guitarInfo.isGuitar ? 'It is a guitar.' : 'It is not a guitar'}
				</div>
			)}

			{attemptSaved && <div>New attempt saved.</div>}

			<Button kind='primary' onClick={buttonProps[state].action}>
				{buttonProps[state].text}
			</Button>
		</ImageContainer>
	)
}
