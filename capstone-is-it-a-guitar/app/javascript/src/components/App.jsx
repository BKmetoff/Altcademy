import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Layout from './Layout'
import History from './History'
import Leaderboard from './Leaderboard'
import CheckGuitar from './CheckGuitar'

export default function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route path='/' exact>
						<CheckGuitar />
					</Route>
					<Route path='/history'>
						<History />
					</Route>
					<Route path='/leaderboard'>
						<Leaderboard />
					</Route>
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
