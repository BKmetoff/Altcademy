import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CurrentUserContext } from '../components/App'

import { safeCredentials, handleErrors } from '../utils/fetchHelper'

import Button from '../backbone/Button'
import Divider from '../backbone/Divider'
import { Wrapper } from '../backbone/Container'

export default function Header() {
	let history = useHistory()
	const { userLoggedInStatus, checkLoggedIn } = useContext(CurrentUserContext)

	const logOutUser = () => {
		fetch(
			`/api/sessions/${userLoggedInStatus.user.user_id}`,
			safeCredentials({
				method: 'DELETE',
			})
		)
			.then(handleErrors)
			.then((data) => {
				console.log('logout response data: ', data)
				data.success && checkLoggedIn()
			})
			.then(history.push('/login'))
			.then(window.location.reload())
			.catch((error) => console.log('logout error: ', error))
	}

	return (
		<Wrapper header column fullWidth>
			<Wrapper justifyBetween>
				{userLoggedInStatus.loggedIn && (
					<>
						<p style={{ fontSize: 16, alignSelf: 'center' }}>
							{userLoggedInStatus.user.username}
						</p>
						<Button kind='secondary' onClick={logOutUser}>
							Log out
						</Button>
					</>
				)}
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
