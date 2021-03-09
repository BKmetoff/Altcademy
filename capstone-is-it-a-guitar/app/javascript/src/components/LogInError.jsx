import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { Theme } from '../backbone/style/Theme'
import { Wrapper } from '../backbone/Container'
import Button from '../backbone/Button'

const ErrorWrapper = styled(Wrapper)`
	margin: auto;
`

const MessageWrapper = styled.div`
	margin-bottom: ${Theme.margin.S};
`

export default function LogInError({ loggedIn }) {
	return (
		<ErrorWrapper alignCenter justifyCenter column>
			<MessageWrapper>
				{loggedIn ? 'Already logged in!' : 'Not logged in!'}
			</MessageWrapper>

			<Button kind='primary'>
				{loggedIn ? (
					<Link to='/'>Check a guitar or smth</Link>
				) : (
					<Link to='/login'>Log in or Sign up</Link>
				)}
			</Button>
		</ErrorWrapper>
	)
}
