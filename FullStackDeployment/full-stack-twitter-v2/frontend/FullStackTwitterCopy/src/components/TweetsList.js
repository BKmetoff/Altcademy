import React from 'react'
import Tweet from './Tweet'

const TweetsList = (props) => {
	const { currentUser, tweets, deleteTweet, modalIsOpen } = props

	return (
		<ul>
			{tweets.map((tweet) => {
				return (
					<li key={tweet.id}>
						<Tweet
							tweet={tweet}
							currentUser={currentUser}
							deleteTweet={deleteTweet}
							modalIsOpen={modalIsOpen}
						/>
					</li>
				)
			})}
		</ul>
	)
}

export default TweetsList
