import React from 'react'
import styled, { css } from 'styled-components'

import { MOCK_DATA } from '../utils/mock'
import sortUsers from '../utils/sortUsers'

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

export default function Leaderboard() {
	return (
		<UserListWrapper>
			{sortUsers(MOCK_DATA.PEERS).map((peer, index) => {
				if (index % 2 !== 0) {
					return (
						<UserRow key={index} odd>
							<p>{peer.USERNAME}</p>
							<p>{peer.AVG_SCORE}</p>
							<p>{peer.ATTEMPTS}</p>
						</UserRow>
					)
				}

				return (
					<UserRow key={index}>
						<p>{peer.USERNAME}</p>
						<p>{peer.AVG_SCORE}</p>
						<p>{peer.ATTEMPTS}</p>
					</UserRow>
				)
			})}
		</UserListWrapper>
	)
}
