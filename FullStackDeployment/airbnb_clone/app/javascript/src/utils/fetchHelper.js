export function jsonHeader(options = {}) {
	return Object.assign(options, {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	})
}

export function getMetaContent(name) {
	const header = document.querySelector(`meta[name="${name}"]`)
	return header && header.content
}

export function getAuthenticityToken() {
	return getMetaContent('csrf-token')
}

export function authenticityHelper(options = {}) {
	return Object.assign(options, {
		'X-CSRF-Token': getAuthenticityToken(),
		'X-Requested-With': 'XMLHttpRequest',
	})
}

export function safeCredentials(options = {}) {
	return Object.assign(options, {
		credentials: 'include',
		mode: 'same-origin',
		headers: Object.assign(
			options.headers || {},
			authenticityHelper(),
			jsonHeader()
		),
	})
}

export function handleErrors(response) {
	if (!response.ok) {
		console.log(response)
		throw Error(response.statusText)
	}
	return response.json()
}
