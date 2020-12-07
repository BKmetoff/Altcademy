import React, { useState, useEffect } from 'react'
import { handleErrors } from '../utils/fetchHelper'
import { dateFormat } from '../utils/dateFormat'
import { Badge } from 'react-bootstrap'

export default function PropertyBookingsList({ propertyId }) {
	const [bookings, setBookings] = useState()

	useEffect(() => {
		getPropertyBookings()
	}, [])

	const getPropertyBookings = () => {
		fetch(`/api/properties/${propertyId}/bookings`)
			.then(handleErrors)
			.then((data) => {
				setBookings(data.bookings)
			})
	}

	return (
		<div className='info col-12 col-lg-6'>
			<h4>Bookings:</h4>
			<div
				className='mb-4 border-bottom'
				style={{ maxHeight: '500px', overflowY: 'scroll' }}
			>
				{!bookings ? (
					<p>No bookings yet!</p>
				) : (
					bookings.map((booking) => {
						let latestCharge =
							booking.charges && booking.charges[booking.charges.length - 1]

						return (
							<div key={booking.id}>
								<div>
									<p className='mb-1'>
										<small className='text-uppercase text-secondary'>
											by:{' '}
										</small>
										<span>
											{booking.username}
											<span className='ml-2'>
												{latestCharge && latestCharge.complete ? (
													<Badge pill variant='success'>
														payed
													</Badge>
												) : (
													<Badge pill variant='danger'>
														not payed
													</Badge>
												)}
											</span>
										</span>
									</p>

									{latestCharge && latestCharge.complete ? (
										<p className='mb-1'>
											<small className='text-uppercase text-secondary'>
												amount:{' '}
											</small>
											<span>
												{latestCharge.amount}{' '}
												{latestCharge.currency.toUpperCase()}
											</span>
										</p>
									) : null}

									<p className='mb-1'>
										<small className='text-uppercase text-secondary'>
											from:{' '}
										</small>
										<span>{dateFormat(booking.start_date)}</span>
									</p>
									<p className='mb-1'>
										<small className='text-uppercase text-secondary'>
											to:{' '}
										</small>
										<span>{dateFormat(booking.end_date)}</span>
									</p>
								</div>
								<hr />
							</div>
						)
					})
				)}
			</div>
		</div>
	)
}
