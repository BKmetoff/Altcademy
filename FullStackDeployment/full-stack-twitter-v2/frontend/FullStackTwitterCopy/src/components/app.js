import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

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
		this.checkLoginStatus = this.checkLoginStatus.bind(this)
	}

	componentDidMount() {
		this.checkLoginStatus()
	}

	checkLoginStatus() {
		axios
			.get('http://localhost:3001/logged_in', { withCredentials: true })
			.then((response) => {
				if (
					response.data.logged_in &&
					this.state.loggedInStatus === 'NOT_LOGGED_IN'
				) {
					this.setState({
						loggedInStatus: 'LOGGED_IN',
						user: response.data.user,
					})
				} else if (
					!response.data.logged_in &&
					this.state.loggedInStatus === 'LOGGED_IN'
				) {
					this.setState({
						loggedInStatus: 'NOT_LOGGED_IN',
						user: {},
					})
				}
			})
			.catch((error) => {
				console.log('log in error:', error)
			})
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
