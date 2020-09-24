import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
import styled from 'styled-components'

import TweetsList from './TweetsList'

import Overlay from './backbone/Overlay'
import StyledModal from './backbone/Modal'
import Button from './backbone/Button'

const ModalHeader = styled.div`
	display: flex;
	justify-content: flex-end;
`

export default function Modal(props) {
	const { open, onClose, tweetAuthor, currentUser } = props

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
				<ModalHeader>
					<Button kind='primary' style={{ fontSize: '18px' }} onClick={onClose}>
						{String.fromCharCode(215)}
					</Button>
				</ModalHeader>
				<TweetsList tweets={state.tweetsOfUser} currentUser={null} />
			</StyledModal>
		</React.Fragment>,
		document.getElementById('portal')
	)
}
