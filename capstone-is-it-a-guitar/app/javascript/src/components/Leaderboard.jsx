import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import sortUsers from '../utils/sortUsers'
import { handleErrors } from '../utils/fetchHelper'

const UserListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 768px;
	width: 100%;
`

const UserRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	${({ odd }) =>
		odd
			? css`
					background-color: lightgray;
			  `
			: css`
					background-color: white;
			  `}
`

const UserListHeader = styled.div`
	display: flex;
	justify-content: space-between;
`
export default function Leaderboard() {
	useEffect(() => {
		getStats()
	}, [])

	const [leaderboardStats, setLeaderboardStats] = useState([])

	const getStats = () => {
		fetch('/api/attempts')
			.then(handleErrors)
			.then((data) => {
				setLeaderboardStats(data)
			})
			.catch((error) => console.log('leaderboard error: ', error))
	}

	return (
		<UserListWrapper>
			{console.log(userStats)}
			<UserListHeader>
				<div>Username</div>
				<div>Average Score</div>
				<div>Attempts</div>
			</UserListHeader>
			{sortUsers(leaderboardStats).map((user, index) => {
				if (index % 2 !== 0) {
					return (
						<UserRow key={index} odd>
							<div>{user.user}</div>
							<div>{`${user.average_success_rate} %`}</div>
							<div>{user.attempts}</div>
						</UserRow>
					)
				}

				return (
					<UserRow key={index}>
						<div>{user.user}</div>
						<div>{`${user.average_success_rate} %`}</div>
						<div>{user.attempts}</div>
					</UserRow>
				)
			})}
		</UserListWrapper>
	)
}
