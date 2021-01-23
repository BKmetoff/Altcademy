import { parseISO, formatRelative } from 'date-fns'

const formatDate = (imageDate) => {
	const parsedDate = parseISO(imageDate)
	const parsedDateNow = parseISO(new Date().toISOString())
	return formatRelative(parsedDate, parsedDateNow, 1)
}

export default formatDate
