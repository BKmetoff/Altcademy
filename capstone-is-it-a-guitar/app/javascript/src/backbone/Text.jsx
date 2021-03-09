import styled, { css } from 'styled-components'
import { Theme } from '../backbone/style/Theme'

const Text = styled.p`
	font-size: 16px;
	align-self: center;

	${({ marginLeft }) =>
		marginLeft &&
		css`
			margin-left: ${Theme.margin.M};
		`}

	${({ marginRight }) =>
		marginRight &&
		css`
			margin-right: ${Theme.margin.M};
		`}

    ${({ small }) =>
		small &&
		css`
			font-size: 13px;
		`}

		${({ medium }) =>
		medium &&
		css`
			font-size: 14px;
		`}
`
export default Text
