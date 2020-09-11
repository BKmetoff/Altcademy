import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory,
} from 'react-router-dom'
import axios from 'axios'

// import { authenticateUser } from '../src/utils/helpers/authenticateUser'
// import { getTweets } from '../helpers/getTweets'

import Layout from './layout'
import { TitleBig, Text } from './utils/components/backbone/Text'
import { ActionsWrapper } from './utils/components/backbone/Wrapper'
import Sheet from './utils/components/backbone/Sheet'
import Button from './utils/components/backbone/Button'
import Input from './utils/components/backbone/Input'

export default function Tweets(props) {
	const [state, setState] = useState({
		isAuthenticated: false,
		currentUser: {
			username: '',
			email: '',
		},
		tweets: [],
		error: '',
	})

	// authenticateUser()
	// getTweets()

	return (
		<Layout>
			<Sheet>{state}</Sheet>
		</Layout>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Tweets />,
		document.body.appendChild(document.createElement('div'))
	)
})
