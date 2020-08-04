import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout'

const Demo = () => (
	<Layout>
		<h1>Demo Page</h1>
	</Layout>
)

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Demo />,
		document.body.appendChild(document.createElement('div'))
	)
})
