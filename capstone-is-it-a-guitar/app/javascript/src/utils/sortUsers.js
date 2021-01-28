const sortUsers = (arrayUsers) => {
	return arrayUsers.sort((a, b) => {
		return b.AVG_SCORE - a.AVG_SCORE
	})
}

export default sortUsers
