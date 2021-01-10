import React, { useState, useReducer, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'

import Layout from './Layout'
import History from './History'
import Leaderboard from './Leaderboard'
import CheckGuitar from './CheckGuitar'
import LoginSignUp from './LoginSignUp'
import NotFound from './NotFound'

const routes = [
	{ component: History, path: '/history' },
	{ component: Leaderboard, path: '/leaderboard' },
	{ component: LoginSignUp, path: '/login' },
	{ component: NotFound, path: '/' },
]

// state below is global
const stateMachine = {
	initial: 'initial',
	states: {
		initial: { on: { next: 'loadingModel' } },
		loadingModel: { on: { next: 'awaitingUpload' } },
		awaitingUpload: { on: { next: 'ready' } },
		ready: { on: { next: 'classifying' }, showImage: true },
		classifying: { on: { next: 'complete' } },
		complete: {
			on: { next: 'awaitingUpload' },
			showImage: true,
			showResults: true,
		},
	},
}

const reducer = (currentState, event) => {
	return stateMachine.states[currentState].on[event] || stateMachine.initial
}

export default function App() {
	tf.setBackend('cpu')
	const [state, dispatch] = useReducer(reducer, stateMachine.initial)
	const [model, setModel] = useState(null)

	const next = () => dispatch('next')

	const loadModel = async () => {
		next()
		const mobilenetModel = await mobilenet.load()
		setModel(mobilenetModel)
		next()
	}

	return (
		<Router>
			<Layout>
				<Switch>
					<Route path='/' exact>
						<CheckGuitar
							state={state}
							stateMachine={stateMachine}
							nextState={next}
							loadModel={loadModel}
							model={model}
						/>
					</Route>
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
