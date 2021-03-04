const sortUsers = (array, sortBy) => {
	if (sortBy == 'created_at') {
		return array
			.sort((a, b) => {
				return b.created_at - a.created_at
			})
			.reverse()
	}

	if (sortBy == 'avg_success') {
		return array.sort((a, b) => {
			return b.average_success_rate - a.average_success_rate
		})
	}
}

export default sortUsers
