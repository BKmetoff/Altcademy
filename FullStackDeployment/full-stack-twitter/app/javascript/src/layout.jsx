import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`

const Footer = styled.footer`
	padding: 1.5em;
	background: blue;
`

const Layout = (props) => {
	return (
		<React.Fragment>
			<Wrapper>{props.children}</Wrapper>
			<Footer></Footer>
		</React.Fragment>
	)
}

export default Layout
