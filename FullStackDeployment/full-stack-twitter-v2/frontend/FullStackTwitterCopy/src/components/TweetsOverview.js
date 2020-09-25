import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import TweetsList from './TweetsList'
import ErrorState from './ErrorState'

import { COLORS } from './theme/Theme'
import Sheet from './backbone/Sheet'
import { ActionsWrapper } from './backbone/Wrapper'
import BaseForm from './backbone/Form'
import Input from './backbone/Input'
import Button from './backbone/Button'
import { Text } from './backbone/Text'

const HeaderWrapper = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	overflow: hidden;
	background: ${COLORS.blue_light};
	mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
	-webkit-mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
`

const FixedHeaderContentWrapper = styled.div`
	position: fixed;
	top: 0;
	background: ${COLORS.blue_light};
	border-radius: 3px;
	mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
	-webkit-mask-image: linear-gradient(to bottom, black 95%, transparent 100%);
`

const UserHeader = styled(Sheet)`
	margin-top: 0px;
	margin-bottom: 5px;
	padding: 5px 20px 5px 20px;
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const NewTweetForm = styled(BaseForm)`
	display: flex;
	flex-wrap: wrap-reverse;
	flex-direction: column;
`

export default function TweetsOverview(props) {
	let history = useHistory()
	const { currentUser, handleLogout, loggedInStatus } = props

	const [state, setState] = useState({
		tweets: [],
		newTweet: '',
		modalIsOpen: false,
	})

	useEffect(() => {
		getAllTweets()
	}, [])

	const handleLogoutClick = () => {
		axios
			.delete('http://localhost:3001/logout', { withCredentials: true })
			.then((response) => {
				handleLogout()
				history.push('/')
			})
			.catch((error) => {
				console.log('log out error: ', error)
			})
	}

	const handleChange = (e) => {
		setState({ ...state, newTweet: e.target.value })
	}

	const postTweet = (e) => {
		e.preventDefault()
		axios
			.post(
				'http://localhost:3001/tweets',
				{ message: state.newTweet },
				{ withCredentials: true }
			)
			.then((response) => {
				setState((prevState) => ({ ...prevState, newTweet: '' }))
				getAllTweets()
				console.log('new tweet response:', response.data)
			})
			.catch((error) => {
				console.log('new tweet error:', error)
			})
	}

	const deleteTweet = (tweetId) => {
		axios
			.delete(`http://localhost:3001/tweets/${tweetId}`, {
				withCredentials: true,
			})
			.then((response) => {
				getAllTweets()
				console.log(`delete tweet ${tweetId} response`, response.data)
			})
			.catch((error) => {
				console.log(`delete tweet ${tweetId} error`, error)
			})
	}

	const getAllTweets = () => {
		axios
			.get('http://localhost:3001/tweets', { withCredentials: true })
			.then((response) => {
				setState((prevState) => ({ ...prevState, tweets: response.data }))
			})
			.catch((error) => {
				console.log('get tweets error: ', error)
			})
	}

	return (
		<ActionsWrapper>
			{loggedInStatus === 'NOT_LOGGED_IN' ? (
				<ErrorState />
			) : (
				<React.Fragment>
					<FixedHeaderContentWrapper>
						<UserHeader width='750'>
							<Text>Welcome, {currentUser.email}</Text>
							<Button kind='secondary' onClick={handleLogoutClick}>
								Log out
							</Button>
						</UserHeader>

						<Sheet>
							<NewTweetForm onSubmit={postTweet}>
								<Input
									type='text'
									placeholder='sup?'
									name='tweet'
									value={state.newTweet}
									onChange={handleChange}
									required
									height='50'
								/>
								<Button kind='primary' type='submit'>
									post
								</Button>
							</NewTweetForm>
						</Sheet>
					</FixedHeaderContentWrapper>
					<TweetsList
						{...props}
						currentUser={currentUser}
						tweets={state.tweets}
						deleteTweet={deleteTweet}
						modalIsOpen={state.modalIsOpen}
					/>
				</React.Fragment>
			)}
		</ActionsWrapper>
	)
}
