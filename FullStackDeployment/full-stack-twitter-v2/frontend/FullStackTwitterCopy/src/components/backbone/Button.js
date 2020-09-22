import styled, { css } from 'styled-components'
import { COLORS, SHADOW } from '../theme/Theme'
const BaseButton = styled.button`
	width: 120px;
	padding: 10px;
	margin: 5px;
	outline: none;
	border: none;
	border-radius: 3px;
	box-shadow: ${SHADOW};
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
	danger: css`
		color: ${COLORS.light};
		background-color: ${COLORS.red};
	`,
}

const Button = styled(BaseButton)`
	${({ kind }) => kinds[kind]}
`

export default Button
