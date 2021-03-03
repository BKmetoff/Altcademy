import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import { CurrentUserContext } from '../components/App'
import LogInError from './LogInError'

import Form from '../backbone/Form'
import BaseDivider from '../backbone/Divider'

const FormsWrapper = styled.div`
	display: flex;
	flex-direction: row;
`
export default function LoginSignUp() {
	const { userLoggedInStatus, checkLoggedIn } = useContext(CurrentUserContext)

	useEffect(() => {
		checkLoggedIn()
	}, [])

	if (userLoggedInStatus.loggedIn && userLoggedInStatus.user.user_id) {
		return <LogInError loggedIn />
	}

	return (
		<FormsWrapper>
			<Form />
			<BaseDivider />
			<Form signUp />
		</FormsWrapper>
	)
}
