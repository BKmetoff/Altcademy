import React from 'react'

const DropDown = ({ data, dropDownType, onClose }) => {
	const dropdownStyle = {
		width: '350px',
		maxHeight: '350px',
		overflowY: 'scroll',
		zIndex: 1000,
		position: 'fixed',
		top: '50px',
		left: dropDownType === 'properties' ? '240px' : '150px',
		background: '#fff',
		border: '1px solid #999',
		borderRadius: '5px',
		padding: '12px',
	}

	const overlayStyle = {
		position: 'fixed',
		zIndex: 1000,
		top: '56px',
		bottom: 0,
		left: 0,
		right: 0,
	}

	return (
		<>
			<div style={overlayStyle} onClick={onClose}></div>
			<div style={dropdownStyle}>
				{dropDownType === 'bookings'
					? data.map((booking) => {
							return <div key={booking.id}>{booking.title}</div>
					  })
					: data.map((property) => {
							return (
								<div key={property.id}>
									<div>{property.title}</div>
									<div>bookings: {property.bookings.length}</div>
								</div>
							)
					  })}
			</div>
		</>
	)
}

export default DropDown
