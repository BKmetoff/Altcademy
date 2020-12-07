import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Button, Form } from 'react-bootstrap'
import Layout from '../layout'

import { handleErrors } from '../utils/fetchHelper'

export default function CreateProperty() {
	const [user, setUser] = useState({
		isLoggedIn: false,
		id: null,
	})

	const [newPropertyDetails, setNewPropertyDetails] = useState()
	const [loading, setLoading] = useState(false)

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

	const handleUpload = async (e) => {
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
		setNewPropertyDetails({ ...newPropertyDetails, image_url: data.secure_url })
		setLoading(false)
	}

	const handleChange = (e) => {
		setNewPropertyDetails({
			...newPropertyDetails,
			[e.target.name]: e.target.value,
		})
		console.log(newPropertyDetails)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		saveNewProperty(newPropertyDetails)
	}

	const saveNewProperty = (details) => {
		console.log('saved...')
	}

	return (
		<Layout>
			<div
				className='container'
				style={{ marginTop: '100px', marginBottom: '75px' }}
			>
				<div className='info col-12'>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='formPropertyTitle'>
							<Form.Label>Title</Form.Label>
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
									<Form.Label>City</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										name='city'
										type='text'
									/>
								</div>
								<div className='w-50'>
									<Form.Label>Country</Form.Label>
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
									<Form.Label>Guests</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										name='max_guests'
										type='number'
									/>
								</div>
								<div className='w-25 mr-2'>
									<Form.Label>Bedrooms</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										name='bedrooms'
										type='number'
									/>
								</div>
								<div className='w-25 mr-2'>
									<Form.Label>Baths</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										name='baths'
										type='number'
									/>
								</div>
								<div className='w-25 mr-2'>
									<Form.Label>Beds</Form.Label>
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
									<Form.Label>Property type</Form.Label>
									<Form.Control
										required
										onChange={handleChange}
										name='property_type'
										type='text'
									/>
								</div>
								<div className='w-50'>
									<Form.Label>Price per night</Form.Label>
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
							<Form.Label>Description</Form.Label>
							<Form.Control
								required
								onChange={handleChange}
								name='description'
								as='textarea'
								rows={6}
							/>
						</Form.Group>

						<Form.Group controlId='formPropertyImage' onChange={handleUpload}>
							<Form.File id='formcheck-api-regular'>
								<Form.File.Label>Upload image</Form.File.Label>
								<Form.File.Input required />
							</Form.File>
						</Form.Group>

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

						<Button
							variant='danger btn-sm'
							className='w-100'
							onClick={() => setIsEditing(false)}
						>
							Cancel
						</Button>
					</Form>
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
