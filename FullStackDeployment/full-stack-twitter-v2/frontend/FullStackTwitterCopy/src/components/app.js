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

		this.handleLogin = this.handleLogin.bind(this)
	}

	handleLogin(userData) {
		this.setState({
			loggedInStatus: 'LOGGED_IN',
			user: userData.user,
		})
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
								<Home
									{...props}
									loggedInStatus={this.state.loggedInStatus}
									handleLogin={this.handleLogin}
								/>
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
