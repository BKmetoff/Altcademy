import React, { useContext } from 'react'
import styled from 'styled-components'

import { CurrentUserContext } from '../components/App'

import Form from '../backbone/Form'
import BaseDivider from '../backbone/Divider'
import Button from '../backbone/Button'
import { Link } from 'react-router-dom'

const FormsWrapper = styled.div`
	display: flex;
	flex-direction: ${(column) => (column ? 'column' : 'row')};
`
export default function LoginSignUp() {
	const { userLoggedInStatus } = useContext(CurrentUserContext)

	if (userLoggedInStatus.loggedIn && userLoggedInStatus.user.user_id) {
		return (
			<FormsWrapper column>
				<div>Already logged in!</div>
				<Button kind='primary'>
					<Link to='/'>check a guitar or smth</Link>
				</Button>
			</FormsWrapper>
		)
	}

	return (
		<FormsWrapper>
			{console.log(userLoggedInStatus)}
			<Form />
			<BaseDivider />
			<Form signUp />
		</FormsWrapper>
	)
}
