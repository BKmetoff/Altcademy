import React, { useContext } from 'react'
import styled from 'styled-components'

import { CurrentUserContext } from '../components/App'
import LogInError from './LogInError'

import Form from '../backbone/Form'
import BaseDivider from '../backbone/Divider'

const FormsWrapper = styled.div`
	display: flex;
	flex-direction: ${(column) => (column ? 'column' : 'row')};
`
export default function LoginSignUp() {
	const { userLoggedInStatus } = useContext(CurrentUserContext)

	if (userLoggedInStatus.loggedIn && userLoggedInStatus.user.user_id) {
		return <LogInError loggedIn />
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
