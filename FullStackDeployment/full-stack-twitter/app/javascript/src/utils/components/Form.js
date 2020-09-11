import React, { useState } from 'react'

import { ActionsWrapper } from './backbone/Wrapper'
import Button from './backbone/Button'
import Input from './backbone/Input'
import BaseForm from './backbone/Form'

import { createSession } from '../helpers/createSession'
import { createUser } from '../helpers/createUser'

export default function Form(props) {
	const [userDetails, setState] = useState({
		username: '',
		email: '',
		password: '',
	})

	const handleSubmit = (e) => {
		userDetails.username === '' ? createSession() : createUser(userDetails)
	}

	return (
		<div>
			<BaseForm
				onSubmit={(e) => {
					e.preventDefault()
					handleSubmit(e)
				}}
			>
				<ActionsWrapper>
					{props.type == 'signup' ? (
						<Input
							type='username'
							placeholder='username'
							name='username'
							value={userDetails.username}
							required
							onChange={(e) =>
								setState({ ...userDetails, username: e.target.value })
							}
						/>
					) : null}

					<Input
						type='email'
						placeholder='email'
						name='email'
						value={userDetails.email}
						required
						onChange={(e) =>
							setState({ ...userDetails, email: e.target.value })
						}
					/>
					<Input
						type='password'
						placeholder='password'
						name='password'
						value={userDetails.password}
						required
						onChange={(e) =>
							setState({ ...userDetails, password: e.target.value })
						}
					/>

					{props.type == 'signup' ? (
						<Button type='submit' kind='primary'>
							create account
						</Button>
					) : (
						<Button type='submit' kind='primary'>
							log in
						</Button>
					)}
				</ActionsWrapper>
			</BaseForm>
		</div>
	)
}
