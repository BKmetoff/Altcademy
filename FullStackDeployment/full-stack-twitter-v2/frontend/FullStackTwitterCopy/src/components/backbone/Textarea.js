import styled from 'styled-components'
import { COLORS } from '../theme/Theme'

const BaseTextArea = styled.textarea`
	max-width: 100%;
	padding: 10px;
	margin: 5px;
	border-radius: 3px;
	border: 1px solid ${COLORS.grey_light};
`
const TextArea = styled(BaseTextArea)`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
`

export default TextArea
