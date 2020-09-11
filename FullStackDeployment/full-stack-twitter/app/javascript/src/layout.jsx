import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './utils/components/theme/GlobalStyles'
import { Theme } from './utils/components/theme/Theme'

import { Footer } from './utils/components/Footer'
import { MainWrapper } from './utils/components/backbone/Wrapper'

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
