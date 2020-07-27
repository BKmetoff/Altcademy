$.ajaxSetup({
	headers: {
		'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
	},
})

$(document).on('turbolinks:load', function () {
	$('#taskAdd').click(function () {
		var newTaskContent = $('#taskDescriptionInput').val()

		postTask(newTaskContent, function (response) {
			$('#tasks').append(
				"<div class='col-12 mb-3 p-2 task' data-id=" +
					response.task.id +
					'>' +
					"<div class='taskContent'>" +
					response.task.content +
					'</div>' +
					"<div class='task-actions'>" +
					"<button class='btn btn-outline-success taskStatusButton markCompleteTask' type='button'>Complete</button>" +
					"<button class='btn btn-outline-danger deleteTask' type='button'>Delete</button>" +
					'</div>' +
					'</div>'
			)
		})

		$('#taskDescriptionInput').val('') // clear input when on new task save
	})
})

$(document).on('turbolinks:load', function () {
	$(document).on('click', '.deleteTask', function () {
		var taskToDeleteId = $(this).closest('.task').attr('data-id')

		destroyTask(taskToDeleteId)

		$(this).closest('.task').remove()
	})
})

// mark complete/active
$(document).on('turbolinks:load', function () {
	$(document).on('click', '.taskStatusButton', function () {
		var taskToUpdateId = $(this).closest('.task').attr('data-id')

		if ($(this).hasClass('markTaskComplete')) {
			completeTask(taskToUpdateId, function (response) {
				console.log(
					'task:' + response.task.id + ' completed: ' + response.task.completed
				)
			})

			$(this)
				.removeClass(['markTaskComplete', 'btn-outline-primary'])
				.addClass(['markTaskUncomplete', 'btn-outline-warning'])
				.html('Restore')
		} else {
			unCompleteTask(taskToUpdateId, function (response) {
				console.log(
					'task:' + response.task.id + ' completed: ' + response.task.completed
				)
			})

			$(this)
				.removeClass(['markTaskUncomplete', 'btn-outline-warning'])
				.addClass(['markTaskComplete', 'btn-outline-success'])
				.html('Complete')
		}
	})
})

// show tasks by status
$(document).on('turbolinks:load', function () {
	$(document).on('click', '.showBulk', function () {
		if ($(this).hasClass('showActive')) {
			filterTasks('active', function (response) {
				renderFilteredTasks(response)
			})
		} else if ($(this).hasClass('showCompleted')) {
			filterTasks('completed', function (response) {
				renderFilteredTasks(response)
			})
		} else {
			filterTasks('all', function (response) {
				renderFilteredTasks(response)
			})
		}
	})
})

var renderFilteredTasks = (requestResponse) => {
	$('#tasks').empty()
	requestResponse.tasks.map((task) => {
		$('#tasks').append(taskComponent(task.id, task.content, task.completed))
	})
}
