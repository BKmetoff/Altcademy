import React from 'react'

import styled, { css } from 'styled-components'
import { Theme } from '../backbone/style/Theme'

import Button from '../backbone/Button'
import Divider from '../backbone/Divider'
import { Wrapper } from '../backbone/Container'

export default function Footer() {
	return (
		<Wrapper footer between fullWidth>
			<span>altcademy</span> <span>git</span>
		</Wrapper>
	)
}
