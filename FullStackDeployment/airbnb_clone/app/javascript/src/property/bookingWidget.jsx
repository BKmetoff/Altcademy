import React from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import { safeCredentials, handleErrors } from '../utils/fetchHelper'

import 'react-dates/lib/css/_datepicker.css'

class BookingWidget extends React.Component {
	state = {
		authenticated: false,
		startDate: null,
		endDate: null,
		focusedInput: null,
		loading: false,
		error: false,
	}

	componentDidMount() {
		fetch('/api/authenticated')
			.then(handleErrors)
			.then((data) => {
				this.setState({
					authenticated: data.authenticated,
				})
			})
	}

	submitBooking = (e) => {
		if (e) {
			e.preventDefault()
		}
		const { startDate, endDate } = this.state
		console.log(startDate.format('MMM DD YYYY'), endDate.format('MMM DD YYYY'))

		fetch(
			`/api/bookings`,
			safeCredentials({
				method: 'POST',
				body: JSON.stringify({
					booking: {
						property_id: this.props.property_id,
						start_date: startDate.format('MMM DD YYYY'),
						end_date: endDate.format('MMM DD YYYY'),
					},
				}),
			})
		)
			.then(handleErrors)
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	onDatesChange = ({ startDate, endDate }) =>
		this.setState({ startDate, endDate })

	onFocusChange = (focusedInput) => this.setState({ focusedInput })

	render() {
		const { authenticated, startDate, endDate, focusedInput } = this.state
		if (!authenticated) {
			return (
				<div className='border p-4 mb-4'>
					Please{' '}
					<a href={`/login?redirect_url=${window.location.pathname}`}>log in</a>{' '}
					to make a booking.
				</div>
			)
		}

		const { price_per_night } = this.props

		let days
		if (startDate && endDate) {
			days = endDate.diff(startDate, 'days')
		}

		return (
			<div className='border p-4 mb-4'>
				<form onSubmit={this.submitBooking}>
					<h5>
						${price_per_night} <small>per night</small>
					</h5>
					<hr />
					<div className='mb-5'>
						<DateRangePicker
							startDate={startDate}
							startDateId='start_date'
							endDate={endDate}
							endDateId='end_date'
							onDatesChange={this.onDatesChange}
							focusedInput={focusedInput}
							onFocusChange={this.onFocusChange}
							numberOfMonths={1}
						/>
					</div>
					{days && (
						<div className='d-flex justify-content-between'>
							<p>Total</p>
							<p>${(price_per_night * days).toLocaleString()}</p>
						</div>
					)}
					<button type='submit' className='btn btn-large btn-danger btn-block'>
						Book
					</button>
				</form>
			</div>
		)
	}
}

export default BookingWidget
