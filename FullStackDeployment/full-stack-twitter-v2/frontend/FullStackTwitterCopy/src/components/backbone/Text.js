import styled from 'styled-components'

import { COLORS } from '../theme/Theme'

export const TitleBig = styled.h1`
	margin: 0.5rem;
	font-size: 3rem;
	text-align: center;
	color: ${COLORS.blue_heavy};
`

const BaseText = styled.p`
	font-size: 1rem;
	margin: 5px;
	color: ${COLORS.dark};
`
export const Text = styled(BaseText)`
	color: ${({ color }) => color};
`

export const ErrorText = styled(BaseText)`
	color: ${COLORS.red};
	text-align: center;
`
