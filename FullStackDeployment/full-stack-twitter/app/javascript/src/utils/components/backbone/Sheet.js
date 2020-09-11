import styled from 'styled-components'
import { COLORS } from '../theme/Theme'

const BaseSheet = styled.div`
	background: ${COLORS.light};
	padding: 1rem;
	margin: 0.5rem;
	border-radius: 3px;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Sheet = styled(BaseSheet)`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
`

export default Sheet
