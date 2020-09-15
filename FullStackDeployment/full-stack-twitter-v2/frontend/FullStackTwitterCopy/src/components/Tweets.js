import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom'

import axios from 'axios'
import TweetsList from './TweetsList'

const _ = require('lodash')

const Tweets = (props) => {
	let history = useHistory()

	const [state, setState] = useState({
		tweets: [],
		newTweet: '',
	})

	const { currentUser, handleLogout, loggedInStatus } = props

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

	useEffect(() => {
		getTweets()
	}, [])

	const getTweets = (tweetAuthorId) => {
		axios
			.get('http://localhost:3001/tweets', { withCredentials: true })
			.then((response) => {
				console.log(tweetAuthorId)
				if (tweetAuthorId) {
					setState({
						...state,
						tweets: response.data.filter(
							(tweet) => tweet.user_id === tweetAuthorId
						),
					})
					// history.push(`/tweets/user-${tweetAuthorId}`)
				} else {
					setState({ ...state, tweets: response.data })
				}
			})
			.catch((error) => {
				console.log('get tweets error: ', error)
			})
	}

	const handleChange = (e) => {
		e.preventDefault()
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
				getTweets()
				console.log('new tweet response:', response.data)
			})
			.catch((error) => {
				console.log('new tweet error:', error)
			})
	}

	return (
		<div>
			<h2>Status: {loggedInStatus}</h2>

			{loggedInStatus === 'NOT_LOGGED_IN' ? (
				<div>
					<div>you're not logged in</div>
					<a href='/'>
						<button>Log in</button>
					</a>
				</div>
			) : (
				<Router>
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
						<Route
							exact
							path={`/tweets/:userId`}
							render={(props) => (
								<TweetsList
									{...props}
									tweets={state.tweets}
									currentUser={currentUser}
									getTweets={getTweets}
								/>
							)}
						/>
						<Route
							exact
							path={'/tweets'}
							render={(props) => (
								<TweetsList
									{...props}
									tweets={state.tweets}
									currentUser={currentUser}
									getTweets={getTweets}
								/>
							)}
						/>
					</div>
				</Router>
			)}
		</div>
	)
}

export default Tweets
