import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from 'react-router-dom'
import axios from 'axios'

import Login from './auth/Login'
import Register from './auth/Register'
import TweetsOverview from './TweetsOverview'

import Layout from './backbone/Layout'
import Sheet from './backbone/Sheet'
import { ActionsWrapper, MainWrapper } from './backbone/Wrapper'
import Button from './backbone/Button'
import { Text, TitleBig } from './backbone/Text'

export default function App() {
	let history = useHistory()

	const [state, setState] = useState({
		loggedInStatus: 'NOT_LOGGED_IN',
		user: {},
		authenticationError: '',
	})

	useEffect(() => {
		checkLoginStatus()
	}, [])

	const handleLogout = () => {
		setState({
			loggedInStatus: 'NOT_LOGGED_IN',
			user: {},
		})
	}

	const checkLoginStatus = () => {
		axios
			.get('http://localhost:3001/logged_in', { withCredentials: true })
			.then((response) => {
				if (
					response.data.logged_in &&
					state.loggedInStatus === 'NOT_LOGGED_IN'
				) {
					setState((prevState) => ({
						...prevState,
						loggedInStatus: 'LOGGED_IN',
						user: response.data.user,
					}))
				} else if (
					!response.data.logged_in &&
					state.loggedInStatus === 'LOGGED_IN'
				) {
					setState((prevState) => ({
						...prevState,
						loggedInStatus: 'NOT_LOGGED_IN',
						user: {},
					}))
				}
			})
			.catch((error) => {
				console.log('log in error:', error)
			})
	}

	const handleLogin = (userData) => {
		setState((prevState) => ({
			...prevState,
			loggedInStatus: 'LOGGED_IN',
			user: userData.user,
		}))
	}

	const handleSuccessfulAuth = (userData) => {
		handleLogin(userData)
		history.push('/tweets')
		history.go(0)
	}

	const handleUnsuccessfulAuth = (authError) => {
		setState((prevState) => ({ ...prevState, authenticationError: authError }))
	}

	return (
		<div className='app'>
			{console.log(state.loggedInStatus)}
			<Layout>
				<Router>
					<Switch>
						<Route
							exact
							path={'/tweets'}
							render={(props) => (
								<TweetsOverview
									{...props}
									loggedInStatus={state.loggedInStatus}
									handleLogout={handleLogout}
									currentUser={state.user}
								/>
							)}
						/>

						<Route
							path={'/login'}
							render={(props) => (
								<MainWrapper>
									<TitleBig>holly sh$t, not another twitter copy</TitleBig>
									<Login
										{...props}
										handleSuccessfulAuth={handleSuccessfulAuth}
										handleUnsuccessfulAuth={handleUnsuccessfulAuth}
										authenticationError={state.authenticationError}
									/>
								</MainWrapper>
							)}
						/>
						<Route
							path={'/signup'}
							render={(props) => (
								<MainWrapper>
									<TitleBig>holly sh$t, not another twitter copy</TitleBig>
									<Register
										{...props}
										handleSuccessfulAuth={handleSuccessfulAuth}
										handleUnsuccessfulAuth={handleUnsuccessfulAuth}
										authenticationError={state.authenticationError}
									/>
								</MainWrapper>
							)}
						/>

						<Route
							path='/'
							render={(props) => (
								<MainWrapper>
									<TitleBig>holly sh$t, not another twitter copy</TitleBig>

									<Sheet height='250' width='250'>
										<ActionsWrapper>
											<Text>log in or sign up</Text>

											<Link to='/login'>
												<Button kind='primary'>log in</Button>
											</Link>

											<Link to='/signup'>
												<Button kind='secondary'>sign up</Button>
											</Link>
										</ActionsWrapper>
									</Sheet>
								</MainWrapper>
							)}
						/>
					</Switch>
				</Router>
			</Layout>
		</div>
	)
}
