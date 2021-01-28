import styled from 'styled-components'
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
		/* font-family: monospace; */
	}
`

const kinds = {
	primary: {},
	secondary: {},
	headerLink: {},
}

const Button = styled(BaseButton)`
	${({ kind }) => kinds[kind]}
`
export default Button
