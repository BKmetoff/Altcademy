import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { MOCK_DATA } from '../utils/mock'

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 768px;
	width: 100%;
`

const ItemsContainer = styled.div`
	display: flex;
	flex-direction: row;
	${({ userActions }) =>
		userActions
			? css`
					justify-content: space-between;
					width: 100%;
			  `
			: css`
					justify-content: center;
			  `}
`

export default function Header() {
	return (
		<HeaderContainer>
			<ItemsContainer userActions>
				<p>{MOCK_DATA.USER.USERNAME}</p>
				<button>Log out</button>
			</ItemsContainer>
			<ItemsContainer>
				<Link to='/'>Upload Image</Link>
				<Link to='/history'>History</Link>
				<Link to='leaderboard'>Leaderboard</Link>
			</ItemsContainer>
		</HeaderContainer>
	)
}
