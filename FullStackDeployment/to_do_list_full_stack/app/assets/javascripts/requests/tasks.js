$.ajaxSetup({
	headers: {
		'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
	},
})

var indexTasks = function (successCB, errorCB) {
	var request = {
		type: 'GET',
		url: 'api/tasks?api_key=1',
		success: successCB,
		error: errorCB,
	}

	$.ajax(request)
}

var postTask = function (content, successCB, errorCB) {
	var request = {
		type: 'POST',
		url: 'api/tasks?api_key=1',
		data: {
			task: {
				content: content,
			},
		},
		success: successCB,
		error: errorCB,
	}

	$.ajax(request)
}

var destroyTask = function (taskId) {
	var request = {
		type: 'DELETE',
		url: 'api/tasks/' + taskId + '?api_key=1',
	}

	$.ajax(request)
}

var completeTask = function (taskId, successCB, errorCB) {
	var request = {
		type: 'PUT',
		url: 'api/tasks/' + taskId + '?api_key=1/mark_complete',
		data: {
			task: { completed: true },
		},
		success: successCB,
		error: errorCB,
	}

	$.ajax(request)
}

var unCompleteTask = function (taskId, successCB, errorCB) {
	var request = {
		type: 'PUT',
		url: 'api/tasks/' + taskId + '?api_key=1/mark_active',
		data: {
			task: { completed: false },
		},
		success: successCB,
		error: errorCB,
	}

	$.ajax(request)
}

var filterTasks = function (params, successCB, errorCB) {
	params.api_key = '1'
	var request = {
		type: 'GET',
		url: 'api/tasks?' + $.param(params),
		success: successCB,
		error: errorCB,
	}

	$.ajax(request)
}
