import React from 'react'
import styled from 'styled-components'

import Tweet from './Tweet'
import Sheet from './backbone/Sheet'

const TweetsList = (props) => {
	const { currentUser, tweets, deleteTweet, modalIsOpen } = props

	return (
		<Sheet width='750' style={{ marginTop: currentUser ? '300px' : '0px' }}>
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
