import React from 'react'
import styled from 'styled-components'

import Sheet from './backbone/Sheet'
import Button from './backbone/Button'
import { Text } from './backbone/Text'
import { MainWrapper } from './backbone/Wrapper'

const CenteredContent = styled(Sheet)`
	align-items: center;
`

export default function ErrorState() {
	return (
		<MainWrapper>
			<CenteredContent height='150' width='200'>
				<Text>you're not logged in</Text>
				<Button kind='primary'>
					<a href='/'>log in on sign up</a>
				</Button>
			</CenteredContent>
		</MainWrapper>
	)
}
