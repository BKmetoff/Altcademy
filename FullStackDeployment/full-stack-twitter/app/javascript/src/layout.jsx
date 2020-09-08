import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './utils/components/globalStyles'
import { Theme } from './utils/components/Theme'

import { Footer } from './utils/components/Footer'
import Wrapper from './utils/components/Wrapper'

const Layout = (props) => {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyle />
			<Wrapper>{props.children}</Wrapper>
			<Footer />
		</ThemeProvider>
	)
}

export default Layout
