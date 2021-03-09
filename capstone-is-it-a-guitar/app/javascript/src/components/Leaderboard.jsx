import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'

import { CurrentUserContext } from '../components/App'
import { Theme } from '../backbone/style/Theme'
import Text from '../backbone/Text'

import sortUsers from '../utils/sortUsers'
import { handleErrors } from '../utils/fetchHelper'

import Badge from '../backbone/Badge'

const UserTableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 768px;
	width: 100%;
	box-shadow: ${Theme.shadow};
	margin-top: ${Theme.margin.M};
	margin-bottom: ${Theme.margin.XXL};
`

const TableRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	height: 40px;
	align-items: center;

	&:first-child {
		border-bottom: 2px solid ${Theme.colors.primary};
	}

	${({ odd }) =>
		odd
			? css`
					background-color: ${Theme.colors.secondary};
			  `
			: css`
					background-color: ${Theme.colors.background};
			  `}
`

const PositionNumber = styled.div`
	flex-grow: 1;
	text-align: center;
`

const UserData = styled.div`
	flex-grow: 9;
	display: flex;
	justify-content: space-around;
`

export default function Leaderboard() {
	const { userLoggedInStatus } = useContext(CurrentUserContext)
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
		<UserTableWrapper>
			<TableRow odd>
				<PositionNumber>#</PositionNumber>
				<UserData>
					<Text medium>Username</Text>
					<Text medium>Success</Text>
					<Text medium>Attempts</Text>
				</UserData>
			</TableRow>
			{sortUsers(leaderboardStats, 'avg_success').map((user, index) => {
				return (
					<TableRow key={index} odd={index % 2 !== 0}>
						<PositionNumber>{index + 1}</PositionNumber>
						<UserData>
							<div>
								{user.user_id == userLoggedInStatus.user.user_id ? (
									<Badge>
										<p>You</p>
									</Badge>
								) : (
									user.username
								)}
							</div>
							<Text medium>{`${user.average_success_rate}%`}</Text>
							<Text medium>{user.attempts}</Text>
						</UserData>
					</TableRow>
				)
			})}
		</UserTableWrapper>
	)
}
