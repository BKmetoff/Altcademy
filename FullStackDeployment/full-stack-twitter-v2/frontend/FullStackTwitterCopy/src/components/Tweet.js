import React, { useState } from 'react'
import Modal from './ModalTweetsByUser'

export default function Tweet(props) {
	const { tweet, currentUser, deleteTweet } = props

	const [isOpen, setIsOpen] = useState(false)

	if (currentUser == null) {
		return <div>{tweet.message}</div>
	}
	return (
		<div>
			{tweet.message}

			{tweet.user_id === currentUser.id ? (
				<span>
					<span>
						{` `}You{` `}
					</span>
					<button onClick={() => deleteTweet(tweet.id)}>delete</button>
				</span>
			) : (
				<span>
					{` `}
					<button onClick={() => setIsOpen(true)}>{tweet.user.email}</button>

					<Modal
						open={isOpen}
						onClose={() => setIsOpen(false)}
						tweetAuthor={tweet.user_id}
						currentUser={currentUser}
					/>
				</span>
			)}
		</div>
	)
}
