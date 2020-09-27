import React, { Component } from 'react'
import axios from 'axios'

import BaseForm from '../backbone/Form'
import { ActionsWrapper } from '../backbone/Wrapper'
import Sheet from '../backbone/Sheet'
import Input from '../backbone/Input'
import Button from '../backbone/Button'
import { ErrorText } from '../backbone/Text'

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

	componentDidMount() {
		this.props.authenticationError
			? this.props.handleUnsuccessfulAuth('')
			: null
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
				} else if (response.data.status === 401) {
					this.props.handleUnsuccessfulAuth('invalid login credentials')
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
			<Sheet height='250' width='250'>
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
						{this.props.authenticationError ? (
							<ErrorText>{this.props.authenticationError}</ErrorText>
						) : null}
						<Button type='submit' kind='primary'>
							log in
						</Button>
					</ActionsWrapper>
				</BaseForm>
			</Sheet>
		)
	}
}
