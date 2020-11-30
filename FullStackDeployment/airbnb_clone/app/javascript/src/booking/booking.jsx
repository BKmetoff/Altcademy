import React, { useState, useEffect } from 'react'
import Layout from '@src/layout'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'
import { dateFormat } from '../utils/dateFormat'

import { Spinner, Badge, Button } from 'react-bootstrap'

// image style
import '../property/property.scss'

export default function Booking(props) {
	const [isLoading, setLoading] = useState(true)
	const [state, setState] = useState({
		booking: {},
		property: {},
		host: {},
		latestCharge: {},
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
					latestCharge: data.booking.charges[data.booking.charges.length - 1],
				})
			})
	}

	const { start_date, end_date, booking_expired } = state.booking
	const { charges } = state.booking
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

	const continuePayment = (e) => {
		e.preventDefault()
		initiateStripeCheckout(state.booking.id)
	}

	const initiateStripeCheckout = (booking_id) => {
		return fetch(
			`/api/charges?booking_id=${booking_id}&cancel_url=${window.location.pathname}`,
			safeCredentials({
				method: 'POST',
			})
		)
			.then(handleErrors)
			.then((response) => {
				const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY)

				stripe
					.redirectToCheckout({
						sessionId: response.charge.checkout_session_id,
					})
					.then((result) => {})
			})
			.catch((error) => {
				console.log(error)
			})
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
					{console.log(state.latestCharge)}
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
										{end_date ? dateFormat(end_date) : end_date}
									</span>
								</p>
								<hr />
								<div>
									{booking_expired && (
										<p className='mb-1'>
											<Badge pill variant='danger'>
												!
											</Badge>
											<span className='ml-2'>Your booking has expired!</span>
										</p>
									)}

									<small className='text-uppercase mb-2 text-secondary mt-2'>
										payment:
									</small>

									{!charges || !state.latestCharge.complete ? (
										<>
											<Badge pill variant='danger' className='ml-2'>
												!
											</Badge>
											<span className='ml-2'>Not complete!</span>

											{!booking_expired && (
												<form onSubmit={continuePayment}>
													<Button
														variant='success'
														size='sm'
														className='w-100 mt-2'
														type='submit'
													>
														Continue payment -{' '}
														{!charges ? null : state.latestCharge.amount}{' '}
														{!charges
															? null
															: state.latestCharge.currency.toUpperCase()}
													</Button>
												</form>
											)}
										</>
									) : (
										<>
											<p className='mb-0 font-weight-bolder'>
												Amount:
												<span className='ml-2 font-weight-normal'>
													{state.latestCharge.amount}
												</span>
											</p>
											<p className='mb-0 font-weight-bolder'>
												Currency:
												<span className='ml-2 font-weight-normal'>
													{state.latestCharge.currency.toUpperCase()}
												</span>
											</p>
											<p className='mb-0 font-weight-bolder'>
												Made on:
												<span className='ml-2 font-weight-normal'>
													{state.latestCharge.updated_at
														? dateFormat(state.latestCharge.updated_at)
														: state.latestCharge.updated_at}
												</span>
											</p>
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
