import styled, { css } from 'styled-components'
import { Theme } from '../backbone/style/Theme'

const BaseButton = styled.button`
	font-size: 16px;
	font-family: monospace;
	outline: none;
	border: none;
	width: 200px;
	height: 40px;

	:hover {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}
`

const kinds = {
	primary: css`
		background: ${Theme.colors.primary};
		border-radius: ${Theme.borderRadius.S};
		box-shadow: ${Theme.shadow};
	`,
	secondary: css`
		background: ${Theme.colors.background};
		height: 30px;
		width: 80px;
		border-radius: 3px;
		box-shadow: ${Theme.shadow};
	`,

	headerLink: css`
		width: 160px;
		font-size: 18px;
		background: inherit;
		letter-spacing: -0.7px;

		a {
			color: ${Theme.colors.dark};
		}
	`,
}

const Button = styled(BaseButton)`
	${({ kind }) => kinds[kind]}
`
export default Button
