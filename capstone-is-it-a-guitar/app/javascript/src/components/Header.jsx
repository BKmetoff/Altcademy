import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../backbone/Button'
import Divider from '../backbone/Divider'
import { Wrapper } from '../backbone/Container'

import { MOCK_DATA } from '../utils/mock'

export default function Header() {
	return (
		<Wrapper header column fullWidth>
			<Wrapper between>
				<p>{MOCK_DATA.USER.USERNAME}</p>
				<Button kind='secondary'>Log out</Button>
			</Wrapper>
			<Wrapper center>
				<Button kind='headerLink'>
					<Link to='/'>Upload Image</Link>
				</Button>
				<Divider />
				<Button kind='headerLink'>
					<Link to='/history'>History</Link>
				</Button>
				<Divider />
				<Button kind='headerLink'>
					<Link to='/leaderboard'>Leaderboard</Link>
				</Button>
			</Wrapper>
		</Wrapper>
	)
}
