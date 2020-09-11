import axios from 'axios'

export const createSession = () => {
	axios
		.post('/api/sessions')
		.then((response) => {
			console.log(response)
		})
		.catch((error) => {
			console.log(error)
		})
}
