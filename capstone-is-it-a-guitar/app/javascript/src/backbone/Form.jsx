import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'
// import checkLoggedIn from '../utils/checkLoggedIn'

const Input = styled.input`
	max-width: 200px;
`

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
`

export default function Form({ signUp }) {
	let history = useHistory()

	useEffect(() => {
		// checkLoggedIn() ? history.push('/') : console.log('not logged in')
		checkLoggedIn()
	}, [])

	const [loginDetails, setLoginDetails] = useState({
		email: '',
		password: '',
		passwordConfirmation: '',
	})

	const checkLoggedIn = () => {
		fetch(
			'/api/authenticated',
			safeCredentials({
				method: 'GET',
			})
		)
			.then(handleErrors)
			.then((data) => {
				data.user && history.push('/')
			})
			.catch((error) => console.log(error))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit clicked', loginDetails)

		fetch(
			'/api/sessions',
			safeCredentials({
				method: 'POST',
				body: JSON.stringify({
					user: {
						email: loginDetails.email,
						password: loginDetails.password,
					},
				}),
			})
		)
			.then(handleErrors)
			.then((data) => {
				console.log(data)
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
			<Input
				type='password'
				name='password'
				onChange={handleChange}
				value={loginDetails.password}
				placeholder='Password'
				required
			/>
			{signUp && (
				<Input
					type='password'
					name='passwordConfirmation'
					onChange={handleChange}
					value={loginDetails.passwordConfirmation}
					placeholder='Confirm password'
					required
				/>
			)}
			<button type='submit'>submit</button>
		</BaseForm>
	)
}
