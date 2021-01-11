import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
	max-width: 200px;
`

const BaseForm = styled.form`
	display: flex;
	flex-direction: column;
`

export default function Form({ signUp }) {
	const [formInput, setFormInput] = useState({
		username: '',
		password: '',
		passwordConfirmation: '',
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit clicked', formInput)
	}

	const handleChange = (e) => {
		setFormInput({ ...formInput, [e.target.name]: e.target.value })
	}

	return (
		<BaseForm onSubmit={handleSubmit}>
			<Input
				type='text'
				name='username'
				onChange={handleChange}
				value={formInput.username}
				placeholder='Username'
				required
			/>
			<Input
				type='password'
				name='password'
				onChange={handleChange}
				value={formInput.password}
				placeholder='Password'
				required
			/>
			{signUp && (
				<Input
					type='password'
					name='passwordConfirmation'
					onChange={handleChange}
					value={formInput.passwordConfirmation}
					placeholder='Confirm password'
					required
				/>
			)}
			<button type='submit'>submit</button>
		</BaseForm>
	)
}
