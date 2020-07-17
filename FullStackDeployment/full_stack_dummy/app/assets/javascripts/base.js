var usefulWidget = function (message) {
	console.log('useful widget: ' + message)
}

document.addEventListener('turbolinks:load', function () {
	console.log('page changed')
})
