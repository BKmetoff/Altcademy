import React from 'react'

import Header from './Header'
import { Container } from '../backbone/Container'

export default function Layout({ children }) {
	return (
		<Container>
			<Header />
			{children}
		</Container>
	)
}
