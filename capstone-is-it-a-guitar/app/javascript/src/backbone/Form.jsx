import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'

import Button from './Button'
import SuccessMessage from './SuccessMessage'
import { Theme } from './style/Theme'

const Input = styled.input`
	max-width: 200px;
	height: 40px;
	outline: none;
	border: none;
	border-radius: ${Theme.borderRadius.S};
	margin-bottom: ${Theme.margin.XS};
	box-shadow: ${Theme.shadow};
`

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
`

export default function Form({ signUp }) {
	let history = useHistory()

	const [signUpResponse, setSignUpResponse] = useState({
		success: false,
		username: '',
	})
	const [loginDetails, setLoginDetails] = useState({
		email: '',
		password: '',
		username: '',
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		fetch(
			loginDetails.username ? '/api/users' : '/api/sessions',
			safeCredentials({
				method: 'POST',
				body: JSON.stringify({
					user: {
						email: loginDetails.email,
						password: loginDetails.password,
						username: loginDetails.username,
					},
				}),
			})
		)
			.then(handleErrors)
			.then((data) => {
				console.log('submit form data: ', data)

				// log in response
				data.success && history.push('/')

				// sign up response
				if (data.user) {
					setSignUpResponse({ success: true, username: data.user.username })
					clearInput()
					console.log(data.user.username)
				}
			})
			.catch((error) => console.log('login error: ', error))
	}

	const handleChange = (e) => {
		setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
	}

	const clearInput = () => {
		setLoginDetails({ email: '', password: '', username: '' })
	}

	return (
		<BaseForm onSubmit={handleSubmit}>
			<Input
				type='email'
				name='email'
				onChange={handleChange}
				value={loginDetails.email}
				placeholder='Email'
				required
			/>
			{signUp && (
				<Input
					type='text'
					name='username'
					onChange={handleChange}
					value={loginDetails.username}
					placeholder='Username'
					required
				/>
			)}
			<Input
				type='password'
				name='password'
				onChange={handleChange}
				value={loginDetails.password}
				placeholder='Password'
				required
			/>

			<Button kind='primary'>{signUp ? 'Sign up' : 'Log in'}</Button>

			{signUpResponse.success && signUpResponse.username && (
				<SuccessMessage>
					<p>welcome, {signUpResponse.username}</p>
					<p>please log in</p>
				</SuccessMessage>
			)}
		</BaseForm>
	)
}
