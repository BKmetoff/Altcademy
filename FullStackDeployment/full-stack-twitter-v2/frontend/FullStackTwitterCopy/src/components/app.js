import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Tweets from './Tweets'

export default class App extends Component {
	constructor() {
		super()

		this.state = {
			loggedInStatus: 'NOT_LOGGED_IN',
			user: {},
		}
	}
	render() {
		return (
			<div className='app'>
				<Router>
					<Switch>
						<Route
							exact
							path={'/'}
							render={(props) => (
								<Home {...props} loggedInStatus={this.state.loggedInStatus} />
							)}
						/>
						<Route
							path={'/tweets'}
							render={(props) => (
								<Tweets {...props} loggedInStatus={this.state.loggedInStatus} />
							)}
						/>
					</Switch>
				</Router>
			</div>
		)
	}
}
