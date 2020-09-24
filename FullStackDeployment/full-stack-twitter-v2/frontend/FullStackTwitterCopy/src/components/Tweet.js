import React, { useState } from 'react'
import styled from 'styled-components'

import Modal from './ModalTweetsByUser'

import Sheet from './backbone/Sheet'
import { ActionsWrapper } from './backbone/Wrapper'
import { Text } from './backbone/Text'
import Button from './backbone/Button'
import { COLORS } from './theme/Theme'

const TweetHeader = styled(ActionsWrapper)`
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1px solid ${COLORS.grey_light};
	margin-bottom: 15px;
`

export default function Tweet(props) {
	const { tweet, currentUser, deleteTweet } = props

	const [isOpen, setIsOpen] = useState(false)

	if (currentUser == null) {
		return <div>{tweet.message}</div>
	}
	return (
		<Sheet>
			{tweet.user_id === currentUser.id ? (
				<TweetHeader>
					<Text>You on {tweet.created_at}</Text>
					<Button kind='danger' onClick={() => deleteTweet(tweet.id)}>
						delete
					</Button>
				</TweetHeader>
			) : (
				<TweetHeader>
					<Text>{tweet.created_at}</Text>
					<Button kind='primary' onClick={() => setIsOpen(true)}>
						{tweet.user.email}
					</Button>

					<Modal
						open={isOpen}
						onClose={() => setIsOpen(false)}
						tweetAuthor={tweet.user_id}
						currentUser={currentUser}
					/>
				</TweetHeader>
			)}
			<Text>{tweet.message}</Text>
		</Sheet>
	)
}
