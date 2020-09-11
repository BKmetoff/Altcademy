import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Tweets from './Tweets'

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<Router>
					<Switch>
						<Route exact path={'/'} component={Home} />
						<Route path={'/tweets'} component={Tweets} />
					</Switch>
				</Router>
			</div>
		)
	}
}
