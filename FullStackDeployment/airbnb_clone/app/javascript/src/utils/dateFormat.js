export const dateFormat = (date) => {
	return date.includes('T')
		? date.replaceAll('-', ' ').split('T')[0]
		: date.replaceAll('-', ' ')
}
