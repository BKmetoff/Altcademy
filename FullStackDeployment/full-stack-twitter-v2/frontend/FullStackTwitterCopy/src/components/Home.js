import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Login from './auth/Login'
import Register from './auth/Register'

import { TitleBig } from './backbone/Text'
import { Text } from './backbone/Text'
import { ActionsWrapper } from './backbone/Wrapper'
import Sheet from './backbone/Sheet'
import Button from './backbone/Button'

export default class Home extends Component {
	constructor(props) {
		super(props)
		// this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
	}

	// handleSuccessfulAuth(userData) {
	// 	this.props.handleLogin(userData)
	// 	this.props.history.push('/tweets')
	// }

	render() {
		return (
			<Router>
				<TitleBig>holly sh$t, not another twitter copy</TitleBig>
				<h2>Status: {this.props.loggedInStatus} </h2>

				<Sheet height='250' width='250'>
					<Switch>
						<Route
							exact
							path='/'
							render={() => (
								<ActionsWrapper>
									<Text>log in or sign up</Text>

									<Link to='/login'>
										<Button kind='primary'>log in</Button>
									</Link>

									<Link to='/signup'>
										<Button kind='secondary'>sign up</Button>
									</Link>
								</ActionsWrapper>
							)}
						/>

						{/* <Route
							exact
							path={'/login'}
							render={(props) => (
								<Login
									{...props}
									handleSuccessfulAuth={this.handleSuccessfulAuth}
								/>
							)}
						/>
						<Route
							exact
							path={'/signup'}
							render={(props) => (
								<Register
									{...props}
									handleSuccessfulAuth={this.handleSuccessfulAuth}
								/>
							)}
						/> */}
					</Switch>
				</Sheet>
			</Router>
		)
	}
}
