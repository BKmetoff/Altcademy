// id: 104

// round buttons:
// - item:
//   - add;
//   - remove;
//   - mark completed;
//   - mark un-completed;
//
// - all items:
//   - mark completed;
//   - mark un-completed;
//   - show completed;
//   - show un-completed;
//   - show all;


var activeItemActions = '<div class="btn-group"><button class="btn btn-outline-success btn-md completeItem" type="button" name="button"><i class="fa fa-check"></i></button><button class="btn btn-outline-danger btn-md deleteItem" type="button" name="button"><i class="fa fa-times"></i></button></div>'

var completedItemActions = '<div class="btn-group"><button class="btn btn-outline-primary btn-md unCompleteItem" type="button" name="button"><i class="fa fa-undo"></i></button><button class="btn btn-outline-danger btn-md deleteItem" type="button" name="button"><i class="fa fa-times"></i></button></div>'


$(document).ready(function () {
  getAllItems()
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
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  })
}
$(document).on('click', '.deleteItem', function () {

   var itemId = $(this).closest('.todoItem').attr('id')
   console.log('item content: ' + $(this).closest('.row').text());
   deleteItem(itemId);

})


//error
var getError = function (request, textStatus, errorMessage) {
  console.log(response);
}
