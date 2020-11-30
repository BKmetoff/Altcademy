import React from 'react'
import ReactDOM from 'react-dom'
import PropertyBookings from './propertyBookings'

document.addEventListener('DOMContentLoaded', () => {
	const node = document.getElementById('params')
	const data = JSON.parse(node.getAttribute('data-params'))

	ReactDOM.render(
		<PropertyBookings property_id={data.property_id} />,
		document.body.appendChild(document.createElement('div'))
	)
})
