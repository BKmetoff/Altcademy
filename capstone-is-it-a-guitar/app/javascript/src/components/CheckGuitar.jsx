import React, { useRef, useState } from 'react'
import { Wrapper } from '../backbone/Container'

import Image from '../backbone/Image'
import Button from '../backbone/Button'

export default function CheckGuitar({
	state,
	nextState,
	stateMachine,
	loadModel,
	model,
}) {
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

	return (
		<Wrapper column>
			<Wrapper justifyCenter alignCenter>
				{console.log(state, isGuitar)}

				<input
					type='file'
					accept='image/*'
					capture='camera'
					ref={inputRef}
					onChange={handleUpload}
					hidden
				/>
				<Button kind='primary' onClick={buttonProps[state].action}>
					{buttonProps[state].text}
				</Button>
				{showResults && (
					<div>{isGuitar ? 'It is a guitar.' : 'It is not a guitar'}</div>
				)}
				{showImage && (
					<div style={{ width: '50%', margin: '0 auto' }}>
						<img
							style={{ width: '100%', height: 'auto' }}
							imageCheckGuitar
							alt='upload-preview'
							src={imageURL}
							ref={imageRef}
						/>
					</div>
				)}
			</Wrapper>
		</Wrapper>
	)
}
