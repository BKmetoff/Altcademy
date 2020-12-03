import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { handleErrors } from './utils/fetchHelper'
import DropDown from './dropdown/dropdown.jsx'

export default function Layout(props) {
	const [user, setUser] = useState({
		isLoggedIn: false,
		id: null,
	})

	const [bookings, setBookings] = useState()
	const [properties, setProperties] = useState()
	const [bookingsIsOpen, setBookingsIsOpen] = useState(false)
	const [propertiesIsOpen, setPropertiesIsOpen] = useState(false)

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

	const getUserBookings = () => {
		setBookingsIsOpen((prevState) => !bookingsIsOpen)
		setPropertiesIsOpen(false)

		fetch(`/api/bookings/user/${user.id}`)
			.then(handleErrors)
			.then((data) => {
				console.log(data)
				setBookings(data.user_bookings)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const getUserProperties = () => {
		setPropertiesIsOpen((prevState) => !propertiesIsOpen)
		setBookingsIsOpen(false)

		fetch(`/api/properties/user/${user.id}`)
			.then(handleErrors)
			.then((data) => {
				console.log(data)
				setProperties(data.user_properties)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const logOutUser = () => {
		fetch('/api/sessions/destroy', { method: 'DELETE' })
			// .then(handleErrors)
			.then((data) => {
				data.ok ? (window.location.href = '/') : null
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const onClose = () => {
		setBookingsIsOpen(false)
		setPropertiesIsOpen(false)
	}

	return (
		<React.Fragment>
			<nav className='navbar navbar-expand navbar-light bg-light w-100 fixed-top'>
				<a href='/'>
					<span className='navbar-brand mb-0 h1 text-danger'>Airbnb</span>
				</a>
				<div className='collapse navbar-collapse'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Button variant='light' href='/'>
								Home
							</Button>
						</li>
						{user.isLoggedIn ? (
							<React.Fragment>
								<li className='nav-item'>
									<Button
										className='mx-2'
										variant='light'
										onClick={getUserBookings}
									>
										Bookings
									</Button>
								</li>
								<li className='nav-item'>
									<Button variant='light' onClick={getUserProperties}>
										Properties
									</Button>
								</li>
								<li className='nav-item'>
									<Button
										className=' ml-3'
										variant='outline-danger'
										onClick={logOutUser}
									>
										Log out
									</Button>
								</li>
							</React.Fragment>
						) : (
							<Button variant='success' href='/login' className='ml-2'>
								Log In or Sign Up
							</Button>
						)}

						{bookingsIsOpen &&
							(bookings ? (
								<DropDown
									data={bookings}
									dropDownType='bookings'
									onClose={onClose}
								/>
							) : (
								<span>Loading</span>
							))}

						{propertiesIsOpen &&
							(properties ? (
								<DropDown
									data={properties}
									dropDownType='properties'
									onClose={onClose}
								/>
							) : (
								<span>Loading</span>
							))}
					</ul>
				</div>
			</nav>
			{props.children}
			<footer className='p-3 bg-light fixed-bottom'>
				<div>
					<p className='mr-3 mb-0 text-secondary'>Airbnb Clone</p>
				</div>
			</footer>
		</React.Fragment>
	)
}
