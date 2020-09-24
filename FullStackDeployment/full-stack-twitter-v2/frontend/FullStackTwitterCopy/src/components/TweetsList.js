import React from 'react'
import styled from 'styled-components'

import Tweet from './Tweet'
import Sheet from './backbone/Sheet'

const TweetsWrapper = styled(Sheet)`
	margin-top: 300px;
`

const TweetsList = (props) => {
	const { currentUser, tweets, deleteTweet, modalIsOpen } = props

	return (
		<TweetsWrapper width='750'>
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
		</TweetsWrapper>
	)
}

export default TweetsList
