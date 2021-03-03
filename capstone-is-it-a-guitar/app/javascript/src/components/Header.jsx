import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../components/App'

import Button from '../backbone/Button'
import Divider from '../backbone/Divider'
import { Wrapper } from '../backbone/Container'

export default function Header() {
	const { userLoggedInStatus } = useContext(CurrentUserContext)

	return (
		<Wrapper header column fullWidth>
			<Wrapper justifyBetween>
				<p>{userLoggedInStatus.user.username}</p>
				<Button kind='secondary'>Log out</Button>
			</Wrapper>
			<Wrapper justifyCenter>
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
