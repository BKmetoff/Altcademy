import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout'

const Home = () => (
	<Layout>
		<h1>Home page</h1>
	</Layout>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Home />,
		document.body.appendChild(document.createElement('div'))
	)
})
