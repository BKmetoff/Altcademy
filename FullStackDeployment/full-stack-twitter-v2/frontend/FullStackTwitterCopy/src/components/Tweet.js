import React, { useState } from 'react'
import Modal from './ModalTweetsByUser'

import Sheet from './backbone/Sheet'
import { ActionsWrapper } from './backbone/Wrapper'
import { Text } from './backbone/Text'
import Button from './backbone/Button'

export default function Tweet(props) {
	const { tweet, currentUser, deleteTweet } = props

	const [isOpen, setIsOpen] = useState(false)

	if (currentUser == null) {
		return <div>{tweet.message}</div>
	}
	return (
		<Sheet>
			<Text>{tweet.message}</Text>

			{tweet.user_id === currentUser.id ? (
				<ActionsWrapper>
					<span>
						{` `}You{` `}
					</span>
					<Button kind='danger' onClick={() => deleteTweet(tweet.id)}>
						delete
					</Button>
				</ActionsWrapper>
			) : (
				<ActionsWrapper>
					{` `}
					<Button kind='primary' onClick={() => setIsOpen(true)}>
						{tweet.user.email}
					</Button>

					<Modal
						open={isOpen}
						onClose={() => setIsOpen(false)}
						tweetAuthor={tweet.user_id}
						currentUser={currentUser}
					/>
				</ActionsWrapper>
			)}
		</Sheet>
	)
}
