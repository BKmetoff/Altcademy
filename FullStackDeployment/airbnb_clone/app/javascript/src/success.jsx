import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Card, Button, Spinner } from 'react-bootstrap'

import { handleErrors } from './utils/fetchHelper'

export default function Success(props) {
	const [isLoading, setIsLoading] = useState(true)
	const [booking, setBooking] = useState()

	useEffect(() => {
		getBooking()
	}, [])

	const getBooking = () => {
		fetch(`/api/bookings/${props.booking_id}`)
			.then(handleErrors)
			.then((data) => {
				setBooking(data.booking)
				setIsLoading(false)
				console.log(booking)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div
			className='d-flex justify-content-center align-items-center'
			style={{ height: '100vh' }}
		>
			{console.log(booking)}

			{isLoading ? (
				<Spinner className='spinner-grow' />
			) : (
				<Card className='m-auto shadow-sm'>
					<Card.Body>
						<h1 className='text-center text-success mb-4'>Success!</h1>
						<h4 className='text-center mt-2 mb-3'>Your booking is complete!</h4>
						<h4 className='text-center mt-2 mb-3'>Booking information:</h4>
						<p className='text-center m-none'>from: {booking.start_date}</p>
						<p className='text-center m-none'>to: {booking.end_date}</p>
						<p className='text-center m-none'>
							at: <strong>{booking.property.title}</strong>
						</p>
						<div className='d-flex justify-content-center mt-4'>
							<Button href='/' className='btn btn-success btn-sm'>
								Go Home
							</Button>
						</div>
					</Card.Body>
				</Card>
			)}
		</div>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	const node = document.getElementById('params')
	const data = JSON.parse(node.getAttribute('data-params'))
	ReactDOM.render(
		<Success booking_id={data.booking_id} />,
		document.body.appendChild(document.createElement('div'))
	)
})
