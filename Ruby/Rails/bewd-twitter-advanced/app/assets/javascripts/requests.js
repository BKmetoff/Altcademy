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

//------------------ Create User --------------------

function createUser(username, email, password, callback) {
  var newRequest = new Request();
  newRequest['type'] = 'POST';
  newRequest['url'] = 'users';
  newRequest['data'] = {
    'user': {
      'username': username,
      'email': email,
      'password': password
    }
  };
  newRequest['success'] = function(response){
    console.log(response);
    return callback();
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
    console.log(response);
    return callback();
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
    return callback();
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

//---------------------- Tweets -----------------------

//------------------- Post a Tweet --------------------
function postTweet(msg, image, callback) {
  var formData = new FormData();
  if (msg) {
    formData.append('tweet[message]', msg);
  }
  if (image) {
    formData.append('tweet[image]', image, image.name);
  }
  var newRequest = {};
  newRequest['type'] = 'POST';
  newRequest['url'] = 'tweets';
  newRequest['cache'] = false;
  newRequest['contentType'] = false;
  newRequest['processData'] = false;
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['data'] = formData;
  newRequest['success'] = function(response){
    console.log(response);
    return callback({'success': true});
  };
  newRequest['error'] = function(request, error){
    console.log(request);
    console.log(error);
  };

  $.ajax(newRequest);
};

//------------------- Get all Tweets ------------------

function getAllTweets(callback) {
  var newRequest = new Request();
  newRequest['type'] = 'GET';
  newRequest['url'] = 'tweets';
  newRequest['success'] = function(response){
    return callback(response.tweets);
  };

  $.ajax(newRequest);
};

//----------------- Get tweet by ID --------------------

function getOneTweet(id) {
  var newRequest = new Request();
  newRequest['type'] = 'GET';
  newRequest['url'] = 'tweets/' + id;
  newRequest['success'] = function(response){
    console.log(response);
  };

  $.ajax(newRequest);
};

//------------- Get All Tweets by Username -------------

function getUserTweets(username, callback) {
  var newRequest = new Request();
  newRequest['type'] = 'GET';
  newRequest['url'] = 'users/' + username + '/tweets';
  newRequest['success'] = function(response){
    console.log(response);
    return callback(response.tweets);
  };

  $.ajax(newRequest);
};

//---------------- Delete a tweet by ID ----------------

function deleteOneTweet(id, callback) {
  var newRequest = new Request();
  newRequest['type'] = 'DELETE';
  newRequest['url'] = 'tweets/' + id;
  newRequest['xhrFields'] = { 'withCredentials': true };
  newRequest['success'] = function(response){
    console.log(response);
    return callback();
  };

  $.ajax(newRequest);
};

//--------------- Search Tweet by Keyword --------------

function searchTweets(keyword, callback) {
  var newRequest = new Request();
  newRequest['type'] = "GET";
  newRequest['url'] = "tweets/search/"+keyword;
  newRequest["success"] = function(response){
    console.log(response);
    return callback(response.tweets);
  };

  $.ajax(newRequest);
};
