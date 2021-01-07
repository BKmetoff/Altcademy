import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Layout from './Layout'
import History from './History'
import Leaderboard from './Leaderboard'
import CheckGuitar from './CheckGuitar'
import LoginSignUp from './LoginSignUp'

const routes = [
	{ component: CheckGuitar, path: '/', exact: true },
	{ component: History, path: '/history' },
	{ component: Leaderboard, path: '/leaderboard' },
	{ component: LoginSignUp, path: '/login' },
]

export default function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					{routes.map((props) => {
						return <Route key={props.path} {...props} />
					})}
				</Switch>
			</Layout>
		</Router>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<App />,
		document.body.appendChild(document.createElement('div'))
	)
})
