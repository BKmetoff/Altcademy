import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

import TweetsList from './TweetsList'

import Overlay from './backbone/Overlay'
import StyledModal from './backbone/Modal'
import Button from './backbone/Button'

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
			<Overlay />
			<StyledModal>
				{children}
				<TweetsList tweets={state.tweetsOfUser} currentUser={null} />
				<Button kind='primary' onClick={onClose}>
					close
				</Button>
			</StyledModal>
		</React.Fragment>,
		document.getElementById('portal')
	)
}
