import styled from 'styled-components'
import { COLORS, SHADOW } from '../theme/Theme'

const BaseSheet = styled.div`
	background: ${COLORS.light};
	padding: 20px;
	margin: 15px;
	border-radius: 5px;
	box-shadow: ${SHADOW};
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: auto;
`

const Sheet = styled(BaseSheet)`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
`

export default Sheet
