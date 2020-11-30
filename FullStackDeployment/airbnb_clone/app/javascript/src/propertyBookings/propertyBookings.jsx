import React, { useState, useEffect } from 'react'
import { handleErrors } from '../utils/fetchHelper'
import { dateFormat } from '../utils/dateFormat'
import Layout from '@src/layout'

import { Spinner, Badge, Button } from 'react-bootstrap'

import '../property/property.scss'

export default function PropertyBookings(props) {
	const [bookings, setBookings] = useState()
	const [property, setProperty] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getProperty()
		getPropertyBookings()
	}, [])

	const getPropertyBookings = () => {
		fetch(`/api/properties/${props.property_id}/bookings`)
			.then(handleErrors)
			.then((data) => {
				setBookings(data.bookings)
				console.log(data.bookings)
			})
	}

	const getProperty = () => {
		fetch(`/api/properties/${props.property_id}`)
			.then(handleErrors)
			.then((data) => {
				setProperty(data.property)
				console.log(data.property)
				setLoading(false)
			})
	}

	return (
		<Layout>
			{loading ? (
				<Spinner className='spinner-grow' />
			) : (
				<>
					<div
						className='property-image mb-3'
						style={{ backgroundImage: `url(${property.image_url})` }}
					/>
					<div className='container'>
						<div className='row'>
							<div className='info col-12 col-lg-6'>
								<div className='mb-3'>
									<h4 className='mb-0'>{property.title}</h4>
									<p className='text-uppercase mb-0 text-secondary'>
										<small>{property.city}</small>
									</p>
								</div>
								<div>
									<p className='mb-0 text-capitalize'>
										<b>{property.property_type}</b>
									</p>
									<p>
										<span className='mr-3'>{property.max_guests} guests</span>
										<span className='mr-3'>{property.bedrooms} bedroom</span>
										<span className='mr-3'>{property.beds} bed</span>
										<span className='mr-3'>{property.baths} bath</span>
									</p>
								</div>
								<hr />
								<p>{property.description}</p>
								<hr />
								<p className='mb-0 text-capitalize'>
									<b>Price per night:</b>
									<span> {property.price_per_night}</span>
								</p>
							</div>
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
												booking.charges &&
												booking.charges[booking.charges.length - 1]

											return (
												<div key={booking.id}>
													{console.log(latestCharge)}
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
						</div>
					</div>
				</>
			)}
		</Layout>
	)
}
