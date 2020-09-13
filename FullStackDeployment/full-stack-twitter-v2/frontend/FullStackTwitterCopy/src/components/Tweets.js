import React from 'react'
import axios from 'axios'

const Tweets = (props) => {
	const handleLogoutClick = () => {
		axios
			.delete('http://localhost:3001/logout', { withCredentials: true })
			.then((response) => {
				console.log(response)
				props.handleLogout()
			})
			.catch((error) => {
				console.log('log out error: ', error)
			})
	}
	return (
		<div>
			<h1>tweets</h1>
			<h2>Status: {props.loggedInStatus}</h2>
			<button onClick={handleLogoutClick}>Log out</button>
		</div>
	)
}

export default Tweets
