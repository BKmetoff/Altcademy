import React from 'react'
import { Link } from 'react-router-dom'

import { Wrapper } from '../backbone/Container'
import Button from '../backbone/Button'

export default function LogInError({ loggedIn }) {
	return (
		<Wrapper alignCenter justifyCenter column>
			<div>{loggedIn ? 'Already logged in!' : 'Not logged in!'}</div>
			<Button kind='primary'>
				{loggedIn ? (
					<Link to='/'>Check a guitar or smth</Link>
				) : (
					<Link to='/login'>Log in or Sign up</Link>
				)}
			</Button>
		</Wrapper>
	)
}
