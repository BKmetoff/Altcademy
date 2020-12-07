import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Button, Form, Toast } from 'react-bootstrap'
import Layout from '../layout'

import { handleErrors, safeCredentials } from '../utils/fetchHelper'

export default function CreateProperty() {
	const [user, setUser] = useState({ isLoggedIn: false })
	const [property, setProperty] = useState()
	const [loading, setLoading] = useState(false)
	const [propertySaved, setPropertySaved] = useState(false)
	const [showToast, setShowToast] = useState(false)

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
					})
					setProperty({ ...property, user_id: data.id })
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const handleImageUpload = async (e) => {
		setLoading(true)

		const imageData = new FormData()
		imageData.append('file', e.target.files[0])
		imageData.append('upload_preset', 'altcademy-airbnb')

		const response = await fetch(
			'https://api.cloudinary.com/v1_1/dzdwgxbjl/image/upload',
			{
				method: 'POST',
				body: imageData,
			}
		)

		const data = await response.json()
		console.log(data)
		setProperty({ ...property, image_url: data.secure_url })
		setLoading(false)
	}

	const handleChange = (e) => {
		setProperty({
			...property,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(property)
		fetch(
			'/api/properties/',
			safeCredentials({
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(property),
			})
		)
			.then(handleErrors)
			.then((data) => {
				console.log(data)
				data.property && setShowToast(true), setPropertySaved(true)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<Layout>
			<div
				className='container'
				style={{ marginTop: '100px', marginBottom: '75px' }}
			>
				<div className='info col-12'>
					{user.isLoggedIn ? (
						<>
							<div
								aria-live='polite'
								aria-atomic='true'
								style={{
									position: 'relative',
									minHeight: '100px',
								}}
							>
								<Toast
									onClose={() => setShowToast(false)}
									show={showToast}
									style={{
										position: 'fixed',
										left: '50%',
										transform: 'translate(-50%)',
									}}
								>
									<Toast.Header>
										<strong className='m-auto'>Success!</strong>
									</Toast.Header>
									<Toast.Body>Your property has been saved.</Toast.Body>
								</Toast>
							</div>

							<Form onSubmit={handleSubmit}>
								<Form.Group controlId='formPropertyTitle'>
									<Form.Label>
										Title <span style={{ color: '#dc3545' }}>*</span>
									</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										name='title'
										type='text'
									/>
								</Form.Group>

								<Form.Group controlId='formPropertyLocation'>
									<div className='d-flex'>
										<div className='w-50 mr-2'>
											<Form.Label>
												City <span style={{ color: '#dc3545' }}>*</span>
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												name='city'
												type='text'
											/>
										</div>
										<div className='w-50'>
											<Form.Label>
												Country <span style={{ color: '#dc3545' }}>*</span>
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												name='country'
												type='text'
											/>
										</div>
									</div>
								</Form.Group>

								<Form.Group controlId='formPropertyAccommodation'>
									<div className='d-flex'>
										<div className='w-25 mr-2'>
											<Form.Label>
												Guests <span style={{ color: '#dc3545' }}>*</span>
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												name='max_guests'
												type='number'
											/>
										</div>
										<div className='w-25 mr-2'>
											<Form.Label>
												Bedrooms <span style={{ color: '#dc3545' }}>*</span>
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												name='bedrooms'
												type='number'
											/>
										</div>
										<div className='w-25 mr-2'>
											<Form.Label>
												Baths <span style={{ color: '#dc3545' }}>*</span>
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												name='baths'
												type='number'
											/>
										</div>
										<div className='w-25 mr-2'>
											<Form.Label>
												Beds <span style={{ color: '#dc3545' }}>*</span>
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												name='beds'
												type='number'
											/>
										</div>
									</div>
								</Form.Group>

								<Form.Group controlId='formPropertyTypePrice'>
									<div className='d-flex'>
										<div className='w-50 mr-2'>
											<Form.Label>
												Property type{' '}
												<span style={{ color: '#dc3545' }}>*</span>
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												name='property_type'
												type='text'
											/>
										</div>
										<div className='w-50'>
											<Form.Label>
												Price per night{' '}
												<span style={{ color: '#dc3545' }}>*</span>
											</Form.Label>
											<Form.Control
												required
												onChange={handleChange}
												name='price_per_night'
												type='number'
											/>
										</div>
									</div>
								</Form.Group>

								<Form.Group controlId='formPropertyDescription'>
									<div className='w-100'></div>
									<Form.Label>
										Description <span style={{ color: '#dc3545' }}>*</span>
									</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										name='description'
										as='textarea'
										rows={6}
									/>
								</Form.Group>

								<Form.Group
									controlId='formPropertyImage'
									onChange={handleImageUpload}
								>
									<Form.File id='formcheck-api-regular'>
										<Form.File.Label>
											Upload image <span style={{ color: '#dc3545' }}>*</span>
										</Form.File.Label>
										<Form.File.Input />
									</Form.File>
								</Form.Group>

								{!propertySaved && (
									<div>
										{loading ? (
											<Button
												variant='success btn-sm'
												type='submit'
												className='w-100 mb-2'
												disabled
											>
												Loading...
											</Button>
										) : (
											<Button
												variant='success btn-sm'
												type='submit'
												className='w-100 mb-2'
											>
												Save
											</Button>
										)}
									</div>
								)}
							</Form>
							<div className='mt-2'>
								<p>
									<span style={{ color: '#dc3545' }}>*</span> required
								</p>
							</div>
						</>
					) : (
						<div className='info col-12 border p-4 mb-4'>
							Please{' '}
							<a href={`/login?redirect_url=${window.location.pathname}`}>
								log in
							</a>{' '}
							to add a property!
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<CreateProperty />,
		document.body.appendChild(document.createElement('div'))
	)
})
