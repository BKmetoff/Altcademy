import React, { useState, useEffect, useContext } from 'react'
import { CurrentUserContext } from '../components/App'

import LogInError from './LogInError'
import ImageCard from '../backbone/ImageCard'

import { safeCredentials, handleErrors } from '../utils/fetchHelper'

import { MOCK_DATA } from '../utils/mock'

export default function History() {
	const { userLoggedInStatus } = useContext(CurrentUserContext)

	const [userStats, setUserStats] = useState({})

	useEffect(() => {
		userLoggedInStatus.loggedIn &&
			userLoggedInStatus.user.user_id &&
			getUserStats()
	}, [])

	const getUserStats = () => {
		fetch('/api/attempts/user', safeCredentials({ method: 'GET' }))
			.then(handleErrors)
			.then((data) => {
				setUserStats(data)
				console.log(data)
			})
			.catch((error) => console.log('history error: ', error))
	}

	if (!userLoggedInStatus.loggedIn && !userLoggedInStatus.user.user_id) {
		return <LogInError />
	}

	return (
		<div>
			<ImageCard image={MOCK_DATA.IMAGE} />
			<ImageCard image={MOCK_DATA.IMAGE} />
			<ImageCard image={MOCK_DATA.IMAGE} />
		</div>
	)
}
