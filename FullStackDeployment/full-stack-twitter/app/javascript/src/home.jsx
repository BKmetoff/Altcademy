import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'
import Layout from './layout'

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`
const Home = () => (
	<Layout>
		<Title>sup?!</Title>
	</Layout>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Home />,
		document.body.appendChild(document.createElement('div'))
	)
})
