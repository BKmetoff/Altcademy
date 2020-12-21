import { useState, useEffect, useRef } from 'react'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'

import './App.css'

function App() {
	// requiored for TensorFlow to start
	tf.setBackend('cpu')

	const [imgUrl, setImgUrl] = useState()
	const [showImg, setShowImg] = useState(false)
	const [model, setModel] = useState(null)
	const [predictionResults, setPredictionResults] = useState([])
	const [isGuitar, setIsGuitar] = useState(null)

	const imageRef = useRef()
	const inputRef = useRef()

	useEffect(() => {
		loadModel()
	}, [])

	const loadModel = async () => {
		const mobilenetModel = await mobilenet.load()
		setModel(mobilenetModel)
	}

	const handleReset = (e) => {
		setShowImg(false)
		setImgUrl('')
		setPredictionResults([])
		setIsGuitar(null)
	}

	const handleUpload = (e) => {
		const { files } = e.target
		if (files.length > 0) {
			const url = URL.createObjectURL(files[0])
			setImgUrl(url)
			setShowImg(true)
		}
	}

	const uploadImg = () => inputRef.current.click()

	const identify = async () => {
		const results = await model.classify(imageRef.current)
		setPredictionResults(results)

		const isGuitarCheck = (resultsElement) => {
			return resultsElement.className.includes('guitar')
		}

		setIsGuitar(results.some(isGuitarCheck))
	}

	if (!model) {
		return (
			<div className='App'>
				<p>loading magic...</p>
			</div>
		)
	}

	return (
		<div className='App'>
			{showImg && (
				<img
					crossOrigin='anonymous'
					alt='upload-preview'
					src={imgUrl}
					ref={imageRef}
				/>
			)}
			<input
				type='file'
				accept='image/*'
				capture='camera'
				onChange={handleUpload}
				ref={inputRef}
				hidden
			/>

			{predictionResults.length !== 0 ? (
				<div className='result-message'>
					<h3>{isGuitar ? "it's a guitar." : "it's not a guitar. "}</h3>
				</div>
			) : (
				<button onClick={!imgUrl ? uploadImg : identify}>
					{!imgUrl ? 'upload image' : 'identify'}
				</button>
			)}

			{imgUrl && <button onClick={handleReset}>reset</button>}
		</div>
	)
}

export default App
