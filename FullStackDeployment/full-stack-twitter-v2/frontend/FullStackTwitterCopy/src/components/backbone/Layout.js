import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../theme/GlobalStyles'
import { Theme } from '../theme/Theme'

import { Footer } from '../Footer'
import { MainWrapper } from './Wrapper'

const Layout = (props) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<MainWrapper>{props.children}</MainWrapper>
			<Footer />
		</ThemeProvider>
	)
}

export default Layout
