import styled, { css } from 'styled-components'
import { Theme } from '../backbone/style/Theme'

const BaseButton = styled.button`
	font-size: 16px;
	font-family: monospace;
	outline: none;
	border: none;

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
		height: 40px;
		width: 220px;
		margin: ${Theme.margin.M} ${Theme.margin.auto} ${Theme.margin.auto}
			${Theme.margin.auto};
	`,
	secondary: {},
	headerLink: css`
		font-weight: 700;
		font-size: 18px;
		background: inherit;
		letter-spacing: -0.7px;
		:hover {
			transform: ${Theme.hoverScale};
		}
		a {
			color: ${Theme.colors.dark};
		}
	`,
}

const Button = styled(BaseButton)`
	${({ kind }) => kinds[kind]}
`
export default Button
