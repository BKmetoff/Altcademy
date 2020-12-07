import React from 'react'
import { Badge } from 'react-bootstrap'

import './dropdown.scss'

const DropDown = ({ data, dropDownType, onClose }) => {
	if (data.length === 0) {
		return (
			<>
				<div className='overlay' onClick={onClose} />
				<div className='nav-bar-dropdown'>
					<div>
						No {dropDownType === 'bookings' ? 'bookings' : 'properties'} yet
					</div>
				</div>
			</>
		)
	}

	return (
		<>
			<div className='overlay' onClick={onClose} />
			<div className='nav-bar-dropdown'>
				{dropDownType === 'bookings' &&
					data.map((booking) => {
						return (
							<div key={booking.id} className='mb-2'>
								<a href={`/booking/${booking.id}`} style={{ color: '#333' }}>
									{!booking.charge[0] ||
									!booking.charge[booking.charge.length - 1].complete ? (
										<Badge pill variant='danger' className='mr-2'>
											not payed
										</Badge>
									) : (
										<Badge pill variant='success' className='mr-2'>
											payed
										</Badge>
									)}
									{booking.title}
									<hr />
								</a>
							</div>
						)
					})}

				{dropDownType === 'properties' &&
					data.map((property) => {
						return (
							<div key={property.id} className='mb-2'>
								<a
									href={`/property/${property.id}/bookings`}
									style={{ color: '#333' }}
								>
									<div>{property.title}</div>
								</a>
								<div className='text-secondary'>
									Number of bookings: {property.bookings.length}
								</div>
								<hr />
							</div>
						)
					})}
			</div>
		</>
	)
}

export default DropDown
