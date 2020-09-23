import styled from 'styled-components'
import { COLORS } from '../theme/Theme'

const BaseInput = styled.input`
	max-width: 100%;
	padding: 10px;
	margin: 5px;
	border-radius: 3px;
	border: 1px solid ${COLORS.grey_light};
`

const Input = styled(BaseInput)`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
`

export default Input
