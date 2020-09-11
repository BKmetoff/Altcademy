import axios from 'axios'

export default authenticateUser = (userDetails) => {
	axios
		.get('/api/authenticated', {
			params: {
				email: userDetails.email,
				password: userDetails.password,
			},
		})
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error)
		})
}
