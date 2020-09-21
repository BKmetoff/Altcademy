import styled from 'styled-components'
import { COLORS, SHADOW } from '../theme/Theme'

const BaseSheet = styled.div`
	background: ${COLORS.light};
	padding: 20px;
	margin: 30px;
	border-radius: 3px;
	box-shadow: ${SHADOW};
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Sheet = styled(BaseSheet)`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
`

export default Sheet
