// id: 104

// round buttons: DONE
// - single item:
//   - add DONE;
//   - remove DONE
//   - mark completed;
//   - mark un-completed;
//
// - bulk actions:
//   - mark completed;
//   - mark un-completed;
//   - show completed;
//   - show un-completed;
//   - show all;


var activeItemActions = '<div class="btn-group"><button class="btn btn-outline-success btn-md completeItem" type="button" name="button"><i class="fa fa-check"></i></button><button class="btn btn-outline-danger btn-md deleteItem" type="button" name="button"><i class="fa fa-times"></i></button></div>'

var completedItemActions = '<div class="btn-group"><button class="btn btn-outline-primary btn-md unCompleteItem" type="button" name="button"><i class="fa fa-undo"></i></button><button class="btn btn-outline-danger btn-md deleteItem" type="button" name="button"><i class="fa fa-times"></i></button></div>'


$(document).ready(function () {
  getAllItems()
  $('#todoInput').val('')
})

var getAllItems = function () {
  $.ajax({
    type: 'GET',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104',
    dataType: 'json',
    success: function (response, textStatus) {
      getSuccess(response);
    },
    error: function (request, textStatus, errorMessage) {
      getError(request, textStatus, errorMessage);
    },
  })
}

// error
var getError = function (request, textStatus, errorMessage) {
  console.log(response);
}

// render all items
var getSuccess = function (jsonResponse) {

  jsonResponse.tasks.forEach((item) => {

    $('#todoContainer').append(
      '<div class="row todoItem" id="' + item.id + '">' +
        '<div class="col-9">' +
          '<p class="todoContent">' + item.content + '</p>' +
        '</div>' +
        '<div class="col-3" id="activeItemActions">' +
          activeItemActions +
        '</div>' +
      '</div>'
    );
  });
}


// delete an item
var deleteItem = function (itemId) {
  $.ajax({
    type: 'DELETE',
    url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks/' + itemId + '?api_key=104',
    success: function (response, textStatus) {
      console.log(response);
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
   console.log('item content: ' + $(this).closest('.todoItem').text());

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
  $('#todoContainer').append(
    '<div class="row todoItem" id="' + newItemId + '">' +
      '<div class="col-9">' +
        '<p class="todoContent">' + newItemContent + '</p>' +
      '</div>' +
      '<div class="col-3" id="activeItemActions">' +
        activeItemActions +
      '</div>' +
    '</div>'
  );
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

}

$(document).on('click', '.completeItem', function () {

  var itemId = $(this).closest('.todoItem').attr('id');
  completeItem(itemId);

})
