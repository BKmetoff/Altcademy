import React from 'react'
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
	margin: 0.5rem;
`
export const Text = ({ children }) => <BaseText>{children}</BaseText>
