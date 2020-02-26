// API key: 104

// - single item:
//   - add DONE;
//   - remove DONE
//   - mark completed DONE;
//   - mark un-completed DONE;

// - bulk actions:
//   - show completed DONE;
//   - show active DONE;
//   - show all DONE;

// - order items by date modified DONE;
// - render only active items on load DONE.
// - empty state DONE.

var activeItemActions = '<div class="col-3 activeItemActions"><div class="btn-group"><button class="btn btn-outline-success btn-md completeItem" type="button" name="button"><i class="fa fa-check"></i></button><button class="btn btn-outline-danger btn-md deleteItem" type="button" name="button"><i class="fa fa-times"></i></button></div></div>'

var completedItemActions = '<div class="col-3 completedItemActions"><div class="btn-group"><button class="btn btn-outline-primary btn-md unCompleteItem" type="button" name="button"><i class="fa fa-undo-alt"></i></button><button class="btn btn-outline-danger btn-md deleteItem" type="button" name="button"><i class="fa fa-times"></i></button></div></div>'

var emptyState = '<div class="row todoItem"><div class="col-12 emptyState"<p class="todoContent">No items yet</p></div></div>'

$(document).ready(function () {
  showActive()
  $('#todoInput').val('')
  $('#showActive').addClass('showActiveHover');
  $('#todoContainer').removeClass('hidden');
})

// listener to show completed
$(document).on('click', '#showCompleted', function() {

  $('#showActive').removeClass('showActiveHover');
  $('#showAll').removeClass('showAllHover');
  $('#showCompleted').addClass('showCompletedHover');
  $('.loadingSpinner').removeClass('hidden');

  showCompleted();
})

// listener to show active
$(document).on('click', '#showActive',function () {

  $('.loadingSpinner').removeClass('hidden');
  $('#showActive').addClass('showActiveHover');
  $('#showAll').removeClass('showAllHover');
  $('#showCompleted').removeClass('showCompletedHover');

  showActive()
})

// listener to show All
$(document).on('click', '#showAll', function () {

  $('.loadingSpinner').removeClass('hidden');
  $('#showActive').removeClass('showActiveHover');
  $('#showAll').addClass('showAllHover');
  $('#showCompleted').removeClass('showCompletedHover');

  showAll();
})

// helpers
var sortTasks = function (jsonResponse) {
  return jsonResponse.sort(function(a, b) {
    var taskAModifiedAt = a.attributes.data.value;
    var taskBModifiedAt = b.attributes.data.value;
    if (taskAModifiedAt > taskBModifiedAt) { return -1; }
    else if (taskAModifiedAt < taskBModifiedAt) { return 1; }
    return 0;
  })
}
var checkEmptyState = function () {
  if ($('.todoItem').length === 0) {
    $('.todoItem').remove();
    $('#todoContainer').append(emptyState)
  }
  else {
    var allTasks = $('.todoItem').detach();
    sortTasks(allTasks).appendTo('#todoContainer');
  }
}

// render all items
var showAll = function () {
  $('.todoItem').remove();
  $.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104',
    dataType: 'json',
    success: function (response) {

      response.tasks.forEach((item) => {
        if (item.completed !== true) {
          $('#todoContainer').append(
            '<div class="row todoItem" data="' + item.updated_at + '" id="' + item.id + '">' +
              '<div class="col-9">' +
                '<p class="todoContent">' + item.content + '</p>' +
              '</div>' +
                activeItemActions +
            '</div>'
          );
        }
        else {
          $('#todoContainer').append(
            '<div class="row todoItem" data="' + item.updated_at + '" id="' + item.id + '">' +
              '<div class="col-9">' +
                '<p class="completedItem"><span class="badge badge-success badge-pill">DONE</span>' + item.content + '</p>' +
              '</div>' +
                completedItemActions +
              '</div>'
          );
        }
      });

      checkEmptyState();

      $('.loadingSpinner').addClass('hidden');
    },

    error: function (response, textStatus) {
      console.log(response , textStatus);
    }
  })
}

// render active items
var showActive = function () {

  $('.todoItem').remove();
  $.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104',
    dataType: 'json',
    success: function (response) {

      response.tasks.forEach((item) => {
        if (item.completed !== true) {
          $('#todoContainer').append(
            '<div class="row todoItem" data="' + item.updated_at + '" id="' + item.id + '">' +
              '<div class="col-9">' +
                '<p class="todoContent">' + item.content + '</p>' +
              '</div>' +
                activeItemActions +
            '</div>'
          );
        }
      });

      checkEmptyState();

      $('.loadingSpinner').addClass('hidden');
    },

    error: function (response, textStatus) {
      console.log(response, textStatus);
    }
  })
}

// render completed items
var showCompleted = function () {
  $('.todoItem').remove();
  $.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104',
    dataType: 'json',
    success: function (response) {
      response.tasks.forEach((item) => {
        if (item.completed === true) {
          $('#todoContainer').append(
            '<div class="row todoItem" data="' + item.updated_at + '" id="' + item.id + '">' +
              '<div class="col-9">' +
                '<p class="completedItem"><span class="badge badge-success badge-pill">DONE</span>' + item.content + '</p>' +
              '</div>' +
                completedItemActions +
              '</div>'
          );
        }
      });

      checkEmptyState();

      $('.loadingSpinner').addClass('hidden');
    },

    error: function (response, textStatus) {
      console.log(response, textStatus);
    }
  })
}

// delete an item
var deleteItem = function (itemId) {
  $.ajax({
    type: 'DELETE',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + itemId + '?api_key=104',
    success: function (response, textStatus) {
      console.log('item ' + itemId + ' has been deleted');
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    }
  })
}
$(document).on('click', '.deleteItem', function () {

   var itemId = $(this).closest('.todoItem').attr('id')
   deleteItem(itemId);
   $(this).closest('.todoItem').hide('slow');

})

// add an item
var postNewItem = function (newItemContent) {

  $.ajax({
    type: 'POST',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/?api_key=104',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: { content: newItemContent }
    }),
    success: function (response, textStatus) {
      console.log('new item created - ' + 'id: ' + response.task.id + ' content: ' + response.task.content);
      renderNewItem(response.task.id, response.task.content)
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage, request);
    }
  })
}
var renderNewItem = function(newItemId, newItemContent) {

  $('<div class="row todoItem" id="' + newItemId + '">' +
      '<div class="col-9">' +
        '<p class="todoContent">' + newItemContent + '</p>' +
      '</div>' +
        activeItemActions +
    '</div>').insertAfter('#itemSelectorRow')

    if ($('.emptyState')) {
      $('.emptyState').closest('.row').remove();
    }
}
$(document).on('click', '#submitItem', function () {
  if ($('#todoInput').val() !== '') {
    postNewItem($('#todoInput').val());
    $('#todoInput').val('')
  }
})

// mark completed
var completeItem = function (itemId) {

  $.ajax({
    type: 'PUT',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + itemId + '/mark_complete?api_key=104',
    success: function (response, textStatus) {
      console.log('item ' + itemId + ' has been completed');
      renderItemCompleted(itemId);
    },
    error: function (errorMessage) {
      console.log(errorMessage);
    }
  })
}
var renderItemCompleted = function (itemId) {
  $('#' + itemId).find('.todoContent').attr('class', 'completedItem');
  $('#' + itemId).find('.activeItemActions').remove();
  $('#' + itemId).find('p').prepend("<span class='badge badge-success badge-pill'>DONE</span>")
  $('#' + itemId).append(completedItemActions);
}
$(document).on('click', '.completeItem', function () {
  var itemId = $(this).closest('.todoItem').attr('id');
  completeItem(itemId);
})

// mark un-completed/active
var unCompleteItem = function (itemId) {
  $.ajax({
    type: 'PUT',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + itemId + '/mark_active?api_key=104',
    success: function (response) {
      console.log('item ' + itemId + ' has been marked active');
      renderItemActive(itemId);
    },
  })
}
var renderItemActive = function (itemId) {
  $('#' + itemId).find('.completedItem').attr('class', 'todoContent');
  $('#' + itemId).find('.badge').remove();
  $('#' + itemId).find('.completedItemActions').remove();
  $('#' + itemId).append(activeItemActions);

}
$(document).on('click', '.unCompleteItem', function () {
  var itemId = $(this).closest('.todoItem').attr('id');
  unCompleteItem(itemId);
})
