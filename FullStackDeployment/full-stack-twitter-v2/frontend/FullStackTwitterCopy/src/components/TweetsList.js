import React from 'react'
import styled from 'styled-components'

import Tweet from './Tweet'
import Sheet from './backbone/Sheet'

const TweetsOverviewSheetWrapper = styled(Sheet)`
	margin-top: 300px;
`

const ModalTweetsSheetWrapper = styled(Sheet)`
	padding: 0px;
	margin: 0px;
	box-shadow: none;
`

const TweetsList = (props) => {
	const { currentUser, tweets, deleteTweet, modalIsOpen } = props

	return (
		<React.Fragment>
			{currentUser ? (
				<TweetsOverviewSheetWrapper width='750'>
					{tweets.map((tweet) => {
						return (
							<div key={tweet.id}>
								<Tweet
									tweet={tweet}
									currentUser={currentUser}
									deleteTweet={deleteTweet}
								/>
							</div>
						)
					})}
				</TweetsOverviewSheetWrapper>
			) : (
				<ModalTweetsSheetWrapper width='750'>
					{tweets.map((tweet) => {
						return (
							<div key={tweet.id}>
								<Tweet
									tweet={tweet}
									currentUser={currentUser}
									deleteTweet={deleteTweet}
								/>
							</div>
						)
					})}
				</ModalTweetsSheetWrapper>
			)}
		</React.Fragment>
	)
}

export default TweetsList
