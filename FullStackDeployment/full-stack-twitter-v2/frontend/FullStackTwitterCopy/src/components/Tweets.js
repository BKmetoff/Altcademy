import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Tweets = (props) => {
	let history = useHistory()
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
					<div>all tweets here</div>
				</div>
			)}
		</div>
	)
}

export default Tweets
