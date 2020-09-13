import React, { Component } from 'react'

import Register from './auth/Register'

export default class Home extends Component {
	constructor(props) {
		super(props)

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
	}

	handleSuccessfulAuth(userData) {
		// TODO update parent component

		this.props.history.push('/tweets')
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<h2>Status: {this.props.loggedInStatus} </h2>

				<Register handleSuccessfulAuth={this.handleSuccessfulAuth} />
			</div>
		)
	}
}
