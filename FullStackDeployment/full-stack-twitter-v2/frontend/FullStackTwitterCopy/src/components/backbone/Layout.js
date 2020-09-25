import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from '../theme/GlobalStyles'
import { Theme } from '../theme/Theme'

import { Footer } from '../Footer'
import { Text } from './Text'

const FooterItemsWrapper = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
`

const Layout = (props) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			{props.children}
			<Footer>
				<FooterItemsWrapper>
					<Text color='#fff'>meaningful footer</Text>
					<Text color='#fff'>{` | `}</Text>
					<a target='_blank' href='https://github.com/BKmetoff/Altcademy'>
						<Text color='#fff'>github/bkmetoff</Text>
					</a>
				</FooterItemsWrapper>
			</Footer>
		</ThemeProvider>
	)
}

export default Layout
