import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

import TweetsList from './TweetsList'

const MODAL_STYLE = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	backgroundColor: '#fff',
	padding: '50px',
	zIndex: 1000,
	borderRadius: '3px',
}

const OVERLAY_STYLE = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, .7)',
	zIndex: 1000,
}

export default function Modal(props) {
	const { open, children, onClose, tweetAuthor, currentUser } = props

	if (!open) {
		return null
	}

	const [state, setState] = useState({ tweetsOfUser: [] })

	useEffect(() => {
		getTweetsByUser(tweetAuthor)
	}, [])

	const getTweetsByUser = (tweetAuthor) => {
		axios
			.get(`http://localhost:3001/tweets/?user_id=${tweetAuthor}`, {
				withCredentials: true,
			})
			.then((response) => {
				setState({ tweetsOfUser: response.data })
			})
			.catch((error) => {
				console.log('tweets by user error', error)
			})
	}

	return ReactDom.createPortal(
		<React.Fragment>
			<div style={OVERLAY_STYLE} />
			<div style={MODAL_STYLE}>
				{children}
				<TweetsList tweets={state.tweetsOfUser} currentUser={null} />
				<button onClick={onClose}>close</button>
			</div>
		</React.Fragment>,
		document.getElementById('portal')
	)
}
