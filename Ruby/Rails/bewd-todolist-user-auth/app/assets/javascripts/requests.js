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

//---------------------- Users -----------------------

//------------------ Create User --------------------

function createUser(username, password, callback) {
  var newRequest = new Request();
  newRequest['type'] = 'POST';
  newRequest['url'] = 'users';
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['data'] = {
    'user': {
      'username': username,
      'password': password
    }
  };
  newRequest['success'] = function(response){

    return callback(response);
  };

  $.ajax(newRequest);
};

//------------------ Signing In -----------------------

function signInUser(username, password, callback) {
  var newRequest = new Request();
  newRequest['type'] = 'POST';
  newRequest['url'] = 'sessions';
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['data'] = {
    'user': {
      'username': username,
      'password': password
    }
  };
  newRequest['success'] = function(response){

    return callback(response);
  };

  $.ajax(newRequest);
};

//------------------- Logging Out ---------------------

function logoutUser(callback) {
  var newRequest = new Request();
  newRequest['type'] = 'DELETE';
  newRequest['url'] = 'sessions';
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['success'] = function(response){
    console.log(response);
    return callback(response);
  };

  $.ajax(newRequest);
}

//------------------ Authenticate ---------------------

function authenticate(successCB,errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'GET';
  newRequest['url'] = 'authenticated';
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['success'] = function(response){
    console.log(response);
    return successCB(response);
  };
  newRequest['error'] = function(request, errorMessage) {
    return errorCB(errorMessage);
  }

  $.ajax(newRequest);
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

//------------------- Get all Tasks ------------------

function getAllUserTasks(successCB, errorCB) {
  var newRequest = new Request();
  newRequest['type'] = 'GET';
  newRequest['url'] = 'my_tasks';
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
