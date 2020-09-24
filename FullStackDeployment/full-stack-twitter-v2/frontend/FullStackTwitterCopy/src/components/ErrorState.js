import React from 'react'

import Sheet from './backbone/Sheet'
import Button from './backbone/Button'
import { Text } from './backbone/Text'
import styled from 'styled-components'

const CenteredContent = styled(Sheet)`
	align-items: center;
`

export default function ErrorState() {
	return (
		<CenteredContent height='150' width='200'>
			<Text>you're not logged in</Text>
			<Button kind='primary'>
				<a href='/'>Log in</a>
			</Button>
		</CenteredContent>
	)
}
