import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { ContentContainer } from '../backbone/Container'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Theme } from '../backbone/style/Theme'

export default function Layout({ children }) {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<ContentContainer>
				<Header />
				{children}
				<Footer />
			</ContentContainer>
		</ThemeProvider>
	)
}
