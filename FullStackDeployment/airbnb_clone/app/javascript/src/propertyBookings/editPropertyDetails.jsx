import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function EditPropertyDetails({
	property,
	setIsEditing,
	savePropertyEdits,
}) {
	const [edits, setEdits] = useState({ id: property.id })

	const handleSubmit = (e) => {
		e.preventDefault()
		savePropertyEdits(edits)
	}

	const handleChange = (e) => {
		setEdits({ ...edits, [e.target.name]: e.target.value })
		console.log(edits)
	}

	return (
		<div className='info col-12 col-lg-6'>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='formPropertyTitle'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						onChange={handleChange}
						name='title'
						type='text'
						placeholder={property.title}
					/>
				</Form.Group>

				<Form.Group controlId='formPropertyLocation'>
					<div className='d-flex'>
						<div className='w-50 mr-2'>
							<Form.Label>City</Form.Label>
							<Form.Control
								onChange={handleChange}
								name='city'
								type='text'
								placeholder={property.city}
							/>
						</div>
						<div className='w-50'>
							<Form.Label>Country</Form.Label>
							<Form.Control
								onChange={handleChange}
								name='country'
								type='text'
								placeholder={property.country}
							/>
						</div>
					</div>
				</Form.Group>

				<Form.Group controlId='formPropertyAccommodation'>
					<div className='d-flex'>
						<div className='w-25 mr-2'>
							<Form.Label>Guests</Form.Label>
							<Form.Control
								onChange={handleChange}
								name='max_guests'
								type='number'
								placeholder={property.max_guests}
							/>
						</div>
						<div className='w-25 mr-2'>
							<Form.Label>Bedrooms</Form.Label>
							<Form.Control
								onChange={handleChange}
								name='bedrooms'
								type='number'
								placeholder={property.bedrooms}
							/>
						</div>
						<div className='w-25 mr-2'>
							<Form.Label>Baths</Form.Label>
							<Form.Control
								onChange={handleChange}
								name='baths'
								type='number'
								placeholder={property.baths}
							/>
						</div>
						<div className='w-25 mr-2'>
							<Form.Label>Beds</Form.Label>
							<Form.Control
								onChange={handleChange}
								name='beds'
								type='number'
								placeholder={property.beds}
							/>
						</div>
					</div>
				</Form.Group>

				<Form.Group controlId='formPropertyTypePrice'>
					<div className='d-flex'>
						<div className='w-50 mr-2'>
							<Form.Label>Property type</Form.Label>
							<Form.Control
								onChange={handleChange}
								name='property_type'
								type='text'
								placeholder={property.property_type}
							/>
						</div>
						<div className='w-50'>
							<Form.Label>Price per night</Form.Label>
							<Form.Control
								onChange={handleChange}
								name='price_per_night'
								type='number'
								placeholder={property.price_per_night}
							/>
						</div>
					</div>
				</Form.Group>

				<Form.Group controlId='formPropertyDescription'>
					<div className='w-100'></div>
					<Form.Label>Description</Form.Label>
					<Form.Control
						onChange={handleChange}
						name='description'
						as='textarea'
						rows={6}
						placeholder={property.description}
					/>
				</Form.Group>

				<Form.Group controlId='formPropertyImage'>
					<Form.File id='formcheck-api-regular'>
						<Form.File.Label>Upload image</Form.File.Label>
						<Form.File.Input />
					</Form.File>
				</Form.Group>

				<Button variant='success btn-sm' type='submit' className='w-100 mb-2'>
					Save
				</Button>
				<Button
					variant='danger btn-sm'
					className='w-100'
					onClick={() => setIsEditing(false)}
				>
					Cancel
				</Button>
			</Form>
		</div>
	)
}
