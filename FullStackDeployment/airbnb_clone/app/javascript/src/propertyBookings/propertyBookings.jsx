import React, { useState, useEffect } from 'react'
import { handleErrors } from '../utils/fetchHelper'
import Layout from '@src/layout'

export default function PropertyBookings(props) {
	const [state, setState] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getPropertyBookings()
	}, [])

	const getPropertyBookings = () => {
		fetch(`/api/properties/${props.property_id}/bookings`)
			.then(handleErrors)
			.then((data) => {
				setLoading(false)
				console.log(data)
			})
	}

	return (
		<Layout>
			<p>this is property bookings</p>
		</Layout>
	)
}
