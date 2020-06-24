function Request() {
  this.type = '';
  this.url = '';
  this.data = {};
  this.dataType = 'json';
  this.success = function(response){
  }
  this.error = function(response){
  }
};

//---------------------- Tasks -----------------------

//------------------- Create a Task --------------------
function postTask(content, successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'POST';
  newRequest['url'] = 'tasks';
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['data'] = {
    'task': {
      'content': content
    }
  };
  newRequest['success'] = function(response){
    return successCB(response);
  };
  newRequest['error'] = function(request, errorMsg){
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
};

//------------------- Get all Tasks ------------------

function getAllTasks(successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'GET';
  newRequest['url'] = 'tasks';
  newRequest['success'] = function(response){
    return successCB(response);
  };
  newRequest['error'] = function(request, errorMsg){
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
};

//---------------- Delete a Task by ID ----------------

function deleteOneTask(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'DELETE';
  newRequest['url'] = 'tasks/' + id;
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['success'] = function(response){
    console.log(response)

    return successCB(response);
  };
  newRequest['error'] = function(request, errorMsg){
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
};

//--------------- Mark a Task as Completed by ID --------------

function markTaskAsComplete(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'PUT';
  newRequest['url'] = 'tasks/' + id + '/mark_complete';
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['success'] = function(response){
    return successCB(response);
  };
  newRequest['error'] = function(request, errorMsg){
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
};

//--------------- Mark a Task as Active by ID --------------

function markTaskAsActive(id, successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'PUT';
  newRequest['url'] = 'tasks/' + id + '/mark_active';
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['success'] = function(response){
    return successCB(response);
  };
  newRequest['error'] = function(request, errorMsg){
    return errorCB(request, errorMsg);
  };

  $.ajax(newRequest);
};
