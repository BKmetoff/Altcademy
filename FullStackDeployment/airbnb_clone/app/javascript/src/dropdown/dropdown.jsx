import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { handleErrors } from './utils/fetchHelper'

export default function Dropdown({ isOpen, userId, data }) {
	const dropdownStyle = {
		width: '350px',
		height: '350px',
		overflowY: 'scroll',
		zIndex: 1000,
		position: 'fixed',
		top: '60px',
		left: '150px',
		background: '#fff',
		border: '1px solid #999',
		borderRadius: '5px',
		padding: '12px',
	}

	return (
		<div style={dropdownStyle}>
			{bookings ? (
				bookings.map((booking) => {
					return <div key={booking.id}>{booking.property_title}</div>
				})
			) : (
				<span>Loading</span>
			)}
		</div>
	)
}
