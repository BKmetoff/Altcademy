import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { ActionsWrapper } from './Wrapper'
import Button from './Button'
import Input from './Input'

export default function Form(props) {
	let history = useHistory()
	const [userDetails, setState] = useState({
		username: '',
		email: '',
		password: '',
	})

	const handleSubmit = (e) => {
		console.log(userDetails)

		axios
			.post('/sessions', {
				user: {
					email: userDetails.email,
					username: userDetails.username,
					password: userDetails.password,
				},
			})
			.then(() => {
				history.push('/tweets')
			})
			.catch((error) => {
				console.log(error)
				history.push('/error')
			})
	}

	return (
		<div>
			<ActionsWrapper>
				{props.type == 'signup' ? (
					<Input
						placeholder='username'
						name={userDetails.username}
						onChange={(e) =>
							setState({ ...userDetails, username: e.target.value })
						}
					/>
				) : null}

				<Input
					placeholder='email'
					name={userDetails.email}
					onChange={(e) => setState({ ...userDetails, email: e.target.value })}
				/>
				<Input
					placeholder='password'
					name={userDetails.password}
					onChange={(e) =>
						setState({ ...userDetails, password: e.target.value })
					}
				/>

				{props.type == 'signup' ? (
					<Button type='primary' onClick={handleSubmit}>
						create account
					</Button>
				) : (
					<Button type='primary' onClick={handleSubmit}>
						log in
					</Button>
				)}
			</ActionsWrapper>
		</div>
	)
}
