import axios from 'axios'

export const getTweets = () => {
	axios.get('/api/tweets').then((response) => {
		console.log(response)
	})
}
