import styled from 'styled-components'
import { COLORS } from './theme/Theme'

export const Footer = styled.footer`
	background: ${COLORS.grey_heavy};
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	height: 40px;
	width: 100%;
	bottom: 0px;
`
