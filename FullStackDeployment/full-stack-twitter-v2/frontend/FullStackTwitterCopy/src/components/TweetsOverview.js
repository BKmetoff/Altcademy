import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import TweetsList from './TweetsList'

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
				setState({ ...state, newTweet: '' })
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
				setState({ ...state, tweets: response.data })
			})
			.catch((error) => {
				console.log('get tweets error: ', error)
			})
	}

	return (
		<div>
			{loggedInStatus === 'NOT_LOGGED_IN' ? (
				<div>
					<div>you're not logged in</div>
					<a href='/'>
						<button>Log in</button>
					</a>
				</div>
			) : (
				<div>
					<h1>tweets</h1>
					<button onClick={handleLogoutClick}>Log out</button>
					<form onSubmit={postTweet}>
						<input
							type='text'
							placeholder='sup?'
							name='tweet'
							value={state.newTweet}
							onChange={handleChange}
							required
						/>
						<button type='submit'>post</button>
					</form>
					<TweetsList
						{...props}
						currentUser={currentUser}
						tweets={state.tweets}
						deleteTweet={deleteTweet}
						modalIsOpen={state.modalIsOpen}
					/>
				</div>
			)}
		</div>
	)
}
