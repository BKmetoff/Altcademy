import styled, { css } from 'styled-components'
import { Theme } from '../backbone/style/Theme'

export const ContentContainer = styled.div`
	max-width: 1024px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: ${Theme.margin.auto};
	margin-right: ${Theme.margin.auto};
	box-shadow: ${Theme.shadow};
	background-color: ${Theme.colors.secondary};
`

export const Wrapper = styled.div`
	display: flex;
	max-width: 768px;

	${({ header }) =>
		header &&
		css`
			top: 0;
			margin-top: ${Theme.margin.M};
		`}

	${({ footer }) =>
		footer &&
		css`
			bottom: 0;
			position: fixed;
			padding-bottom: ${Theme.padding.M};
		`}

	${({ between }) =>
		between &&
		css`
			justify-content: space-between;
		`}

	${({ center }) =>
		center &&
		css`
			justify-content: center;
		`}

	${({ fullWidth }) =>
		fullWidth &&
		css`
			width: 100%;
		`}

	${({ column }) =>
		column &&
		css`
			flex-direction: column;
		`}
`
