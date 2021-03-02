const sortUsers = (arrayUsers) => {
	return arrayUsers.sort((a, b) => {
		return b.average_success_rate - a.average_success_rate
	})
}

export default sortUsers
