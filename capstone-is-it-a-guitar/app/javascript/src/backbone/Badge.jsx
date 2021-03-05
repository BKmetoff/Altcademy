import styled, { css } from 'styled-components'
import { Theme } from '../backbone/style/Theme'

const Badge = styled.div`
	border-radius: 50px;
	/* background-color: #7d6318; */
	background-color: ${Theme.colors.dark};
	color: #fff;
	height: 25px;
	width: 45px;

	display: flex;
	justify-content: center;
	align-items: center;
`

export default Badge
