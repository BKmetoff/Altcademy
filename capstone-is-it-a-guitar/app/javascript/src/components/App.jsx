import React from 'react'
import ReactDOM from 'react-dom'

import { Layout } from './Layout'

export default function App() {
	return <Layout />
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<App />,
		document.body.appendChild(document.createElement('div'))
	)
})
