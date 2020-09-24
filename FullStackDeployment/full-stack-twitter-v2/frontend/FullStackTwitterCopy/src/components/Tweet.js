import React, { useState } from 'react'
import styled from 'styled-components'
import { parseISO, formatRelative } from 'date-fns'

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

	const formatDate = (tweetCreatedAt) => {
		const parsedTweetDate = parseISO(tweetCreatedAt)
		const parsedDateNow = parseISO(new Date().toISOString())
		return formatRelative(parsedTweetDate, parsedDateNow, 1)
	}

	if (currentUser == null) {
		return (
			<Sheet>
				<TweetHeader>
					<Text>{formatDate(tweet.created_at)}</Text>
					<Text>{tweet.user.email}</Text>
				</TweetHeader>
				<Text>{tweet.message}</Text>
			</Sheet>
		)
	}
	return (
		<Sheet>
			{tweet.user_id === currentUser.id ? (
				<TweetHeader>
					<Text>You, {formatDate(tweet.created_at)}</Text>
					<Button kind='danger' onClick={() => deleteTweet(tweet.id)}>
						delete
					</Button>
				</TweetHeader>
			) : (
				<TweetHeader>
					<Text>{formatDate(tweet.created_at)}</Text>
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
