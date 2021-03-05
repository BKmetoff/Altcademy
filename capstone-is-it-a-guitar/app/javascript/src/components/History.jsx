import React, { useState, useEffect, useContext } from 'react'
import { CurrentUserContext } from '../components/App'

import styled from 'styled-components'
import { Theme } from '../backbone/style/Theme'

import LogInError from './LogInError'
import ImageCard from '../backbone/ImageCard'
import { Wrapper } from '../backbone/Container'

import { safeCredentials, handleErrors } from '../utils/fetchHelper'
import sortUsers from '../utils/sortUsers'

const UserStats = styled.div`
	display: flex;
	width: 350px;
	flex-direction: column;
	align-self: center;
	margin-left: ${Theme.margin.S};
	margin-right: ${Theme.margin.S};
`

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
			})
			.catch((error) => console.log('history error: ', error))
	}

	if (!userLoggedInStatus.loggedIn && !userLoggedInStatus.user.user_id) {
		return <LogInError />
	}

	if (!userStats.attempts) {
		return <div>loading</div>
	}

	return (
		<>
			<Wrapper flexWrap justifyCenter marginBottom>
				<UserStats>
					<div>your average score: {userStats.average}%</div>
					<div>attempts: {userStats.attempts.length}</div>
				</UserStats>
				{sortUsers(userStats.attempts, 'created_at').map((attempt, index) => {
					return <ImageCard key={index} image={attempt} />
				})}
			</Wrapper>
		</>
	)
}
