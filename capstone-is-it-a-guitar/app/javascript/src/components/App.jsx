import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Layout from './Layout'
import History from './History'
import Leaderboard from './Leaderboard'
import CheckGuitar from './CheckGuitar'
import LoginSignUp from './LoginSignUp'
import NotFound from './NotFound'

const stateMachine = {
	initial: 'initial',
	states: {
		initial: { on: { next: 'loadingModel' } },
		loadingModel: { on: { next: 'awaitingUpload' } },
		awaitingUpload: { on: { next: 'ready' } },
		ready: { on: { next: 'classifying' } },
		classifying: { on: { next: 'complete' } },
		complete: { on: { next: 'awaitingUpload' } },
	},
}

const reducer = (currentState, event) => {
	return stateMachine.states[currentState].on[event] || stateMachine.initial
}

export default function App() {
	const [state, dispatch] = useReducer(reducer, stateMachine.initial)

	const routes = [
		// { component: CheckGuitar, path: '/', exact: true, dispatch: { dispatch } },
		{ component: History, path: '/history' },
		{ component: Leaderboard, path: '/leaderboard' },
		{ component: LoginSignUp, path: '/login' },
		{ component: NotFound, path: '/' },
	]

	return (
		<Router>
			<Layout>
				<Switch>
					<Route path='/' exact>
						<CheckGuitar dispatch={dispatch} state={state} />
					</Route>
					{routes.map((props) => {
						// props.component === CheckGuitar ?
						// return <Route>
						// <CheckGuitar pa
						// </Route>:
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
