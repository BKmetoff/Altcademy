import React, { useState, useEffect } from 'react'
import Layout from '@src/layout'
import { handleErrors } from '../utils/fetchHelper'

import { Spinner } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'

// image style
import '../property/property.scss'

export default function Booking(props) {
	const [isLoading, setLoading] = useState(true)
	const [state, setState] = useState({
		booking: {},
		property: {},
		host: {},
		charge: {},
	})

	useEffect(() => {
		getBooking()
	}, [])

	const getBooking = () => {
		fetch(`/api/bookings/${props.booking_id}`)
			.then(handleErrors)
			.then((data) => {
				setLoading(false)
				setState({
					...state,
					booking: data.booking,
					property: data.booking.property,
					host: data.booking.property.user,
					charge: data.booking.charge,
				})
			})
	}

	const { start_date, end_date, booking_expired } = state.booking
	const { charge } = state.booking
	const { username } = state.host
	const {
		title,
		description,
		city,
		property_type,
		max_guests,
		bedrooms,
		beds,
		baths,
		image_url,
	} = state.property

	const dateFormat = (date) => {
		return date.includes('T')
			? date.replaceAll('-', ' ').split('T')[0]
			: date.replaceAll('-', ' ')
	}

	return (
		<Layout>
			{isLoading ? (
				<Spinner className='spinner-grow' />
			) : (
				<>
					<div
						className='property-image mb-3'
						style={{ backgroundImage: `url(${image_url})` }}
					/>
					{console.log(state.booking)}
					<div className='container'>
						<div className='row'>
							<div className='info col-6 col-lg-7'>
								<div className='mb-3'>
									<h3 className='mb-1'>{title}</h3>
									<p className='text-uppercase mb-0 text-secondary'>
										<small>{city}</small>
									</p>
									<p className='mb-0'>
										<small>
											Hosted by <b>{username}</b>
										</small>
									</p>
								</div>
								<div>
									<p className='mb-0 text-capitalize'>
										<b>{property_type}</b>
									</p>
									<p>
										<span className='mr-3'>{max_guests} guests</span>
										<span className='mr-3'>{bedrooms} bedroom</span>
										<span className='mr-3'>{beds} bed</span>
										<span className='mr-3'>{baths} bath</span>
									</p>
								</div>
								<hr />
								<p>{description}</p>
							</div>
							<div className='info col-6 col-lg-5'>
								<h3 className='mb-1'>Booking details:</h3>
								<p className='text-uppercase mb-0 text-secondary'>
									<small>from:</small>
									<span className='ml-2 text-dark'>
										{start_date ? dateFormat(start_date) : start_date}
									</span>
								</p>
								<p className='text-uppercase mb-0 text-secondary'>
									<small>to:</small>
									<span className='ml-2 text-dark'>
										{start_date ? dateFormat(start_date) : start_date}
									</span>
								</p>
								<hr />
								<div>
									{booking_expired && (
										<p className='mb-1'>
											<small className='text-uppercase mb-0 text-secondary mt-2'>
												attention:
											</small>
											<Badge pill variant='danger' className='ml-2'>
												!
											</Badge>
											<span className='ml-2'>Your booking has expired!</span>
										</p>
									)}
									<small className='text-uppercase mb-2 text-secondary mt-2'>
										payment:
									</small>

									{!charge ? (
										<>
											<Badge pill variant='danger' className='ml-2'>
												!
											</Badge>
											<span className='ml-2'>Not complete!</span>
										</>
									) : (
										<>
											<p className='mb-0 font-weight-bolder'>
												Amount:
												<span className='ml-2 font-weight-normal'>
													{charge.amount}
												</span>
											</p>
											<p className='mb-0 font-weight-bolder'>
												Currency:
												<span className='ml-2 font-weight-normal'>
													{charge.currency.toUpperCase()}
												</span>
											</p>
											<p className='mb-0 font-weight-bolder'>
												Made on:
												<span className='ml-2 font-weight-normal'>
													{charge.updated_at
														? dateFormat(charge.updated_at)
														: charge.updated_at}
												</span>
											</p>

											{console.log(charge)}
										</>
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
