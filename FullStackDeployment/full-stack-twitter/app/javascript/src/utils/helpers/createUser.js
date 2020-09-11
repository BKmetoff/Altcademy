import axios from 'axios'
import { createSession } from './createSession'

export const createUser = (userDetails) => {
	axios
		.post(
			'/api/users',
			{
				user: {
					username: userDetails.username,
					email: userDetails.email,
					password: userDetails.password,
					password_confirmation: userDetails.password_confirmation,
				},
			},
			{ withCredentials: true }
		)
		.then((response) => {
			console.log(response)
			// createSession()
			history.push('/tweets')
		})
		.catch((error) => {
			console.log(error)
		})
}
