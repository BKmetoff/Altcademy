import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const _ = require('lodash')

const Tweets = (props) => {
	let history = useHistory()

	const [tweets, setTweets] = useState()

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

	function getTweets() {
		axios
			.get('http://localhost:3001/tweets', { withCredentials: true })
			.then((response) => {
				setTweets({
					tweets: response.data.tweets,
				})
			})
			.catch((error) => {
				console.log('get tweets error: ', error)
			})
	}

	useEffect(() => {
		getTweets()
	}, [])

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
					<ul>
						{_.flatMap(tweets).map((tweet) => {
							return <li key={tweet.id}>{tweet.message}</li>
						})}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Tweets
