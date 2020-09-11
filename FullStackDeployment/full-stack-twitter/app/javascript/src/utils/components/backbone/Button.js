import styled, { css } from 'styled-components'
import { COLORS } from '../theme/Theme'

const BaseButton = styled.button`
	width: 142px;
	padding: 10px;
	margin: 5px;
	outline: none;
	border: none;
	border-radius: 3px;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
`

const kinds = {
	primary: css`
		color: ${COLORS.light};
		background-color: ${COLORS.blue_heavy};
	`,
	secondary: css`
		color: ${COLORS.light};
		background-color: ${COLORS.grey_heavy};
	`,
}

const Button = styled(BaseButton)`
	${({ kind }) => kinds[kind]}
`

export default Button
