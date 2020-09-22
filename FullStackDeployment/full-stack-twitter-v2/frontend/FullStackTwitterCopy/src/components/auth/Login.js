import React, { Component } from 'react'
import axios from 'axios'

import BaseForm from '../backbone/Form'
import { ActionsWrapper } from '../backbone/Wrapper'
import Input from '../backbone/Input'
import Button from '../backbone/Button'

export default class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			loginErrors: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(event) {
		const { email, password } = this.state

		axios
			.post(
				'http://localhost:3001/sessions',
				{
					user: {
						email: email,
						password: password,
					},
				},
				{
					withCredentials: true,
				}
			)
			.then((response) => {
				if (response.data.logged_in) {
					this.props.handleSuccessfulAuth(response.data)
				}
			})
			.catch((error) => {
				console.log('login error', error)
			})

		event.preventDefault()
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	render() {
		return (
			<BaseForm onSubmit={this.handleSubmit}>
				<ActionsWrapper>
					<Input
						type='email'
						name='email'
						placeholder='email'
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<Input
						type='password'
						name='password'
						placeholder='password'
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					<Button type='submit' kind='primary'>
						log in
					</Button>
				</ActionsWrapper>
			</BaseForm>
		)
	}
}
