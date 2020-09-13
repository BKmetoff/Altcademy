import React from 'react'

const Tweets = (props) => {
	return (
		<div>
			<h1>tweets</h1>
			<h2>Status: {props.loggedInStatus}</h2>
		</div>
	)
}

export default Tweets
