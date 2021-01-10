import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<div>
			Oops, that's a 404!
			<div>
				<Link to='/'>Home</Link>
			</div>
		</div>
	)
}
