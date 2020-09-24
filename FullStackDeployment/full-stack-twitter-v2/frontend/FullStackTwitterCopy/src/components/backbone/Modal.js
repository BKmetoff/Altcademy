import styled from 'styled-components'
import { COLORS } from '../theme/Theme'

export const StyledModal = styled.div`
	position: fixed;
	overflow: scroll;
	max-height: 550px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${COLORS.light};
	padding: 10px;
	z-index: 1000;
	border-radius: 3px;
`
export default StyledModal
