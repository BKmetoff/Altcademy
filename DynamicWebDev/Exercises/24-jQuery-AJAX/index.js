// id: 104

$.ajax({
  type: 'GET',
  url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104',
  dataType: 'json',
  success: function (response, textStatus) {
    console.log(response);
  },
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  }
});

$.ajax({
  type: 'POST',
  url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104',
  contentType: 'application/json',
  dataType: 'json',
  data: JSON.stringify({
    task: {
      content: 'learn more jQuery'
    }
  })
})
