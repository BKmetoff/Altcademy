import React from 'react'
import { Badge } from 'react-bootstrap'

const DropDown = ({ data, dropDownType, onClose }) => {
	const dropdownStyle = {
		maxWidth: '320px',
		maxHeight: '380px',
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

	if (data.length === 0) {
		return (
			<>
				<div style={overlayStyle} onClick={onClose} />
				<div style={dropdownStyle}>
					<div>
						No {dropDownType === 'bookings' ? 'bookings' : 'properties'} yet
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<div style={overlayStyle} onClick={onClose} />
			<div style={dropdownStyle}>
				{dropDownType === 'bookings' &&
					data.map((booking) => {
						return (
							<div key={booking.id} className='mb-2'>
								{!booking.charge[0] ? (
									<Badge pill variant='danger' className='mr-2'>
										not payed
									</Badge>
								) : (
									<Badge pill variant='success' className='mr-2'>
										payed
									</Badge>
								)}
								{booking.title}
							</div>
						)
					})}

				{dropDownType === 'properties' &&
					data.map((property) => {
						return (
							<div key={property.id} className='mb-2'>
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
