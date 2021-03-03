import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'

import Button from '../backbone/Button'

const Input = styled.input`
	max-width: 200px;
`

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
`

export default function Form({ signUp }) {
	let history = useHistory()

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
				console.log('submit login form data: ', data)
				data.success && history.push('/')
			})
			.catch((error) => console.log('login error: ', error))
	}

	const handleChange = (e) => {
		setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })
	}

	return (
		<BaseForm onSubmit={handleSubmit}>
			<div>{signUp ? 'Sign up' : 'Log in'} </div>
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

			<Button kind={signUp ? 'secondary' : 'primary'}>
				{signUp ? 'Sign up' : 'Log in'}
			</Button>
		</BaseForm>
	)
}
