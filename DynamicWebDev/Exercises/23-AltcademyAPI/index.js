// id: 104

var request = new XMLHttpRequest();

request.onload = function () {
  if (request.readyState === XMLHttpRequest.DONE) {
    if (request.status === 200) {
      var tasks = JSON.parse(request.responseText);
      console.log(tasks);
    }

  }
  else {
    console.log(request.statusText);
  }

}

request.onerror = function () {
  console.log(request.responseText);
}

// create task:
request.open('POST', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/?api_key=104');
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify({
  task: {
    content: 'write some good code!'
  }
}));

// edit task (id in open URL):
request.open('PUT', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/1348?api_key=104');
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify({
  task: {
    content: 'this was edited'
  }
}));

// mark complete:
request.open('PUT', 'https://altcademy-to-do-list-api.herokuapp.com/tasks/1348/mark_complete?api_key=104');
request.send();
