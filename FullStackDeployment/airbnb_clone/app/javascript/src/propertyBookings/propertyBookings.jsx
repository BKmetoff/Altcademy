import React, { useState, useEffect } from 'react'
import { handleErrors, safeCredentials } from '../utils/fetchHelper'
import { Spinner, Badge } from 'react-bootstrap'

import Layout from '@src/layout'
import PropertyDetails from './propertyDetails'
import EditPropertyDetails from './editPropertyDetails'
import PropertyBookingsList from './propertyBookingsList'

import '../property/property.scss'

export default function PropertyBookings(props) {
	const [loading, setLoading] = useState(true)
	const [property, setProperty] = useState()
	const [isEditing, setIsEditing] = useState(false)

	useEffect(() => {
		getProperty()
	}, [])

	const getProperty = () => {
		fetch(`/api/properties/${props.property_id}`)
			.then(handleErrors)
			.then((data) => {
				setProperty(data.property)
				console.log(data.property)
				setLoading(false)
			})
	}

	const savePropertyEdits = (propertyEdits) => {
		console.log(propertyEdits)
		fetch(
			`/api/properties/${propertyEdits.id}`,
			safeCredentials({
				method: 'PUT',
			})
		)
			.then(handleErrors)
			.then((data) => console.log(data))
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
					<div className='container' style={{ marginBottom: '100px' }}>
						<div className='row'>
							{isEditing ? (
								<EditPropertyDetails
									property={property}
									setIsEditing={setIsEditing}
									savePropertyEdits={savePropertyEdits}
								/>
							) : (
								<PropertyDetails
									property={property}
									setIsEditing={setIsEditing}
								/>
							)}

							<PropertyBookingsList propertyId={props.property_id} />
						</div>
					</div>
				</>
			)}
		</Layout>
	)
}
