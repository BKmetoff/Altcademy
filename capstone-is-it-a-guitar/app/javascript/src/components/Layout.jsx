// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'

import Header from './Header'
import { Container } from '../backbone/Container'

import { MOCK_DATA } from '../utils/mock'

const loggedIn = MOCK_DATA.LOGGED_IN

export const Layout = ({ children }) => {
	return (
		<Container>
			{loggedIn && <Header />}
			{children}
		</Container>
	)
}
