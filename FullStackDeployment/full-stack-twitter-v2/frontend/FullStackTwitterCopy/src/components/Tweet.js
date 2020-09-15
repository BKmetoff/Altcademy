import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Tweet(props) {
	const { tweet, currentUser, getTweets } = props

	const deleteTweet = (tweetId) => {
		axios
			.delete(`http://localhost:3001/tweets/${tweetId}`, {
				withCredentials: true,
			})
			.then((response) => {
				getTweets()
				console.log(`delete tweet ${tweetId} response`, response.data)
			})
			.catch((error) => {
				console.log(`delete tweet ${tweetId} error`, error)
			})
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
					<Link
						onClick={() => getTweets(tweet.user_id)}
						to={`/tweets/${tweet.user_id}`}
					>
						{tweet.user.email}
					</Link>
				</span>
			)}
		</div>
	)
}
