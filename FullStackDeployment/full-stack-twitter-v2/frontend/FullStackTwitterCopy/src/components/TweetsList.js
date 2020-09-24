import React from 'react'
import styled from 'styled-components'

import Tweet from './Tweet'
import Sheet from './backbone/Sheet'

const TweetsList = (props) => {
	const { currentUser, tweets, deleteTweet, modalIsOpen } = props

	const UserTweetsWrapper = styled(Sheet)`
		margin: ${currentUser ? '300' : '0'}px;
		box-shadow: ${currentUser ? '' : 'none'};
	`

	return (
		<UserTweetsWrapper width='750'>
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
		</UserTweetsWrapper>
	)
}

export default TweetsList
