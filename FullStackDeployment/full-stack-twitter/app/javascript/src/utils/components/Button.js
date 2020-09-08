import styled, { css } from 'styled-components'
import { COLORS } from './Theme'

const BaseButton = styled.button`
	padding: 0.5rem;
	margin: 0.3rem;
	outline: none;
	border: none;
	border-radius: 3px;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
`

const types = {
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
	${({ type }) => types[type]}
`

export default Button
