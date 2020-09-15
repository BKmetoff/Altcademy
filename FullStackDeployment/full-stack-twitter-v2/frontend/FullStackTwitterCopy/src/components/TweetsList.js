import React from 'react'
import Tweet from './Tweet'

const TweetsList = (props) => {
	const { tweets, currentUser, getTweets } = props

	return (
		<ul>
			{tweets.map((tweet) => {
				return (
					<li key={tweet.id}>
						<Tweet
							tweet={tweet}
							currentUser={currentUser}
							getTweets={getTweets}
						/>
					</li>
				)
			})}
		</ul>
	)
}

export default TweetsList
