import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { handleErrors } from '../utils/fetchHelper'

export default function PropertyDetails({ property, setIsEditing }) {
	const [user, setUser] = useState({ isLoggedIn: '', id: '' })

	useEffect(() => {
		checkLogInStatus()
	}, [])

	const checkLogInStatus = () => {
		fetch('/api/authenticated')
			.then(handleErrors)
			.then((data) => {
				console.log(data)
				if (data.authenticated) {
					setUser({
						isLoggedIn: data.authenticated,
						id: data.id,
					})
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
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

			{user.id === property.user.id && (
				<>
					<hr />
					<Button
						variant='info btn-sm'
						className='w-100'
						onClick={() => setIsEditing(true)}
					>
						Edit details
					</Button>
				</>
			)}
		</div>
	)
}
