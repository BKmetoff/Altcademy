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

import Layout from './layout'
import { TitleBig, Text } from './utils/components/Text'
import { ActionsWrapper } from './utils/components/Wrapper'
import Button from './utils/components/Button'
import Input from './utils/components/Input'

export default function Tweets() {
	const getTweets = axios.get('/tweets').then((response) => {
		console.log(response)
	})

	return <Layout>blabla</Layout>
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Tweets />,
		document.body.appendChild(document.createElement('div'))
	)
})
