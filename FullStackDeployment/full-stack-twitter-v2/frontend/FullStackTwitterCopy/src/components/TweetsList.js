import React from 'react'
import Tweet from './Tweet'

import Sheet from './backbone/Sheet'

const TweetsList = (props) => {
	const { currentUser, tweets, deleteTweet, modalIsOpen } = props

	return (
		<Sheet width='750'>
			{tweets.map((tweet) => {
				return (
					<div key={tweet.id}>
						<Tweet
							tweet={tweet}
							currentUser={currentUser}
							deleteTweet={deleteTweet}
							modalIsOpen={modalIsOpen}
						/>
					</div>
				)
			})}
		</Sheet>
	)
}

export default TweetsList
