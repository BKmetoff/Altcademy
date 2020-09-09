import React, { useState } from 'react'

import { ActionsWrapper } from './Wrapper'
import Button from './Button'
import Input from './Input'

export default function Form(props) {
	const [userDetails, setState] = useState({
		username: '',
		email: '',
		password: '',
	})

	const handleSubmit = (e) => {
		console.log(userDetails)
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
