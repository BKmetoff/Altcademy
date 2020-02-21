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


// var completedItemActions

var activeItemActions = '<div class="btn-group"><button class="btn btn-outline-success btn-md completeItem" type="button" name="button"><i class="fa fa-check-circle-o"></i></button><button class="btn btn-outline-danger btn-md deleteItem" type="button" name="button"><i class="fa fa-times-circle-o"></i></button></div>'

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

var getSuccess = function (jsonResponse) {
  console.log(jsonResponse.tasks[0].content);

  jsonResponse.tasks.forEach((item) => {

    var todoItem = item.content;
    $('#todoContainer').append(
      '<div class="row" id="todoItem">' +
        '<div class="col-9">' +
          '<p class="todoContent">' + todoItem + '</p>' +
        '</div>' +
        '<div class="col-3 activeItemActions text-align-center">' +
          activeItemActions +
        '</div>' +
      '</div>'
    );
  });

}

var getError = function (request, textStatus, errorMessage) {
  console.log(response);
}
