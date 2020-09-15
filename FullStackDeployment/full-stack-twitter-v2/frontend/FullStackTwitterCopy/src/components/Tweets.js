import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const _ = require('lodash')

const Tweets = (props) => {
	let history = useHistory()

	const [state, setState] = useState({ tweets: [], newTweet: '' })

	const handleLogoutClick = () => {
		axios
			.delete('http://localhost:3001/logout', { withCredentials: true })
			.then((response) => {
				props.handleLogout()
				history.push('/')
			})
			.catch((error) => {
				console.log('log out error: ', error)
			})
	}

	useEffect(() => {
		getTweets()
	}, [])

	const getTweets = () => {
		axios
			.get('http://localhost:3001/tweets', { withCredentials: true })
			.then((response) => {
				setState({ ...state, tweets: response.data })
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

	const deleteTweet = (tweetId) => {
		axios
			.delete(`http://localhost:3001/tweets/${tweetId}`, {
				withCredentials: true,
			})
			.then((response) => {
				getTweets()
				console.log(`delete tweet ${tweetId} response`, response.data)
			})
			.catch((error) => {
				console.log(`delete tweet ${tweetId} error`, error)
			})
	}

	return (
		<div>
			<h2>Status: {props.loggedInStatus}</h2>

			{props.loggedInStatus === 'NOT_LOGGED_IN' ? (
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
					{/* {console.log(props)} */}
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
					<ul>
						{_.flatMap(state.tweets).map((tweet) => {
							return (
								<li key={tweet.id}>
									<div>
										{tweet.message}
										{tweet.user_id === props.currentUser.id ? (
											<span>
												<span>
													{` `}You{` `}
												</span>
												<button onClick={() => deleteTweet(tweet.id)}>
													delete
												</button>
											</span>
										) : (
											<span>
												{` `}
												{tweet.user.email}
											</span>
										)}
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Tweets
