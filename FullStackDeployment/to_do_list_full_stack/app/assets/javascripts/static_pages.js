$(document).on('turbolinks:load', function () {
	if ($('.static_pages.index').length > 0) {
		indexTasks(function (response) {
			response.tasks.map((task) => {
				$('#tasks').append(taskComponent(task.id, task.content, task.completed))
			})
		})
	}
})

var taskComponent = (id, content, completed) => {
	if (completed) {
		return (
			"<div class='col-12 mb-3 p-2 task' data-id=" +
			id +
			'>' +
			taskContent(content) +
			"<div class='task-actions'>" +
			restoreButton +
			deleteButton +
			'</div>' +
			'</div>'
		)
	} else {
		return (
			"<div class='col-12 mb-3 p-2 task' data-id=" +
			id +
			'>' +
			taskContent(content) +
			"<div class='task-actions'>" +
			completeButton +
			deleteButton +
			'</div>' +
			'</div>'
		)
	}
}

var taskContent = (content) => {
	return "<div class='taskContent'>" + content + '</div>'
}

var completeButton =
	"<button class='btn btn-outline-success taskStatusButton markTaskComplete' type='button'>Complete</button>"

var restoreButton =
	"<button class='btn btn-outline-warning taskStatusButton markTaskUncomplete' type='button'>Restore</button>"

var deleteButton =
	"<button class='btn btn-outline-danger deleteTask' type='button'>Delete</button>"
