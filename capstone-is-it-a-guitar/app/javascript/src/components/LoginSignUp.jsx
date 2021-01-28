import React from 'react'
import styled from 'styled-components'

import Form from '../backbone/Form'
import BaseDivider from '../backbone/Divider'

const FormsWrapper = styled.div`
	display: flex;
	flex-direction: row;
`
export default function LoginSignUp() {
	return (
		<FormsWrapper>
			<Form />
			<BaseDivider />
			<Form signUp />
		</FormsWrapper>
	)
}
