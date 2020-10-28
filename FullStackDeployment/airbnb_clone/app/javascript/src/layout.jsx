import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { handleErrors } from './utils/fetchHelper'

export default function Layout(props) {
	const [user, setUser] = useState({
		isLoggedIn: false,
		id: null,
	})

	const [bookings, setBookings] = useState()
	const [bookingsIsOpen, setBookingsIsOpen] = useState(false)
	const [propertiesIsOpen, setPropertiesIsOpen] = useState(false)

	useEffect(() => {
		checkLogInStatus()
	}, [])

	const checkLogInStatus = () => {
		fetch('/api/authenticated')
			.then(handleErrors)
			.then((data) => {
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

	const getUserBookings = () => {
		setBookingsIsOpen((prevState) => !bookingsIsOpen)
		setPropertiesIsOpen(false)

		fetch(`/api/bookings/user/${user.id}`)
			.then(handleErrors)
			.then((data) => {
				setBookings(data.user_bookings)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const getUserProperties = () => {
		console.log('properties')
		setPropertiesIsOpen((prevState) => !propertiesIsOpen)
		setBookingsIsOpen(false)

		fetch(`/api/bookings/user/${user.id}`)
			.then(handleErrors)
			.then((data) => {
				setBookings(data.user_bookings)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const dropdownStyle = {
		width: '350px',
		height: '350px',
		overflowY: 'scroll',
		zIndex: 1000,
		position: 'fixed',
		top: '60px',
		left: propertiesIsOpen ? '240px' : '150px', //'150px',
		background: '#fff',
		border: '1px solid #999',
		borderRadius: '5px',
		padding: '12px',
	}

	return (
		<React.Fragment>
			<nav className='navbar navbar-expand navbar-light bg-light'>
				<a href='/'>
					<span className='navbar-brand mb-0 h1 text-danger'>Airbnb</span>
				</a>
				<div className='collapse navbar-collapse'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<Button
								className='ml-2 nav-link btn-light'
								onClick={getUserBookings}
							>
								Bookings
							</Button>
						</li>
						<li className='nav-item'>
							<Button
								className='nav-link btn-light'
								onClick={getUserProperties}
							>
								Properties
							</Button>
						</li>

						{bookingsIsOpen ? (
							<div style={dropdownStyle}>
								{bookings ? (
									bookings.map((booking) => {
										return <div key={booking.id}>{booking.property_title}</div>
									})
								) : (
									<span>Loading</span>
								)}
							</div>
						) : null}
						{propertiesIsOpen ? (
							<div style={dropdownStyle}>
								{bookings ? (
									bookings.map((booking) => {
										return <div key={booking.id}>{booking.property_title}</div>
									})
								) : (
									<span>Loading</span>
								)}
							</div>
						) : null}
					</ul>
				</div>
			</nav>
			{props.children}
			<footer className='p-3 bg-light'>
				<div>
					<p className='mr-3 mb-0 text-secondary'>Airbnb Clone</p>
				</div>
			</footer>
		</React.Fragment>
	)
}
