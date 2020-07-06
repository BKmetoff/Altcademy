$(".homepage.index").ready(function(){

  //------------------ authenticate ---------------------

  function authenticateAndRefresh() {
    authenticate(function(response) {
      if(response.authenticated) {
        refreshTasks(true);
        toggleLoginLogoutButton();
        $("#task-input").prop('disabled', false);
      } else {
        refreshTasks(false);
        $("#task-input").prop('disabled', true);
      }
    }, function(errorMsg) {
      console.log(errorMsg);
      refreshTasks(false);
      $("#task-input").prop('disabled', true);
    });
  };

  //------------------- Sign up / Log in / Log out Buttons ---------------------

  $(document).on('click', '#sign-up-btn', function(e){
    if (e) {
      e.preventDefault();
    }
    var usernameInput = $('#sign-up-form .username').val();
    var passwordInput = $('#sign-up-form .password').val();
    createUser(usernameInput, passwordInput, function(response){
      if (response.user) {
        signInUser(usernameInput, passwordInput, function(response){
          if (response.success) {
            $('.login-signup-modal').modal('hide')
            authenticateAndRefresh();
          }
        });
      }
    });
  });

  $(document).on('click', '#log-in-btn', function(e){
    if (e) {
      e.preventDefault();
    }
    $('#login-error').hide();
    var usernameInput = $('#log-in-form .username').val();
    var passwordInput = $('#log-in-form .password').val();
    signInUser(usernameInput, passwordInput, function(response){
      if (response.success) {
        $('.login-signup-modal').modal('hide')
        authenticateAndRefresh();
      } else {
        $('#login-error').show();
      }
    });
  });

  $(document).on('click', '#log-out-btn', function() {
    logoutUser(function(){
      authenticate(function(response) {
        if(!response.authenticated) {
          refreshTasks(false);
          $("#task-input").prop('disabled', true);
          toggleLoginLogoutButton();
        }
      });
    });
  });

  var toggleLoginLogoutButton = function() {
    $('#open-login-signup-modal-btn').toggle();
    $('#log-out-btn').toggle();
  }

  //------------------- Sign up / Log in Toggle ---------------------

  $(document).on('click', '#toggle-signup-form', function(e) {
    if (e) {
      e.preventDefault();
    }
    $('#log-in-form').hide();
    $('#toggle-signup-form').hide();
    $('#log-in-btn').hide();
    $('#sign-up-form').show();
    $('#toggle-login-form').show();
    $('#sign-up-btn').show();
  });

  $(document).on('click', '#toggle-login-form', function(e) {
    if (e) {
      e.preventDefault();
    }
    $('#log-in-form').show();
    $('#toggle-signup-form').show();
    $('#log-in-btn').show();
    $('#sign-up-form').hide();
    $('#toggle-login-form').hide();
    $('#sign-up-btn').hide();
  });

  //------------------- To do list ---------------------
  var taskInput = $('#task-input');
  var todoList = $('#todo-list');
  var taskList = [];
  var filter = "All";

  var addTask = function(content, id, completed) {
    var taskDiv = document.createElement('div');
    taskDiv.setAttribute('class','task');
    var taskContent = document.createElement('p');
    var markCompleteButton = document.createElement('span');
    markCompleteButton.setAttribute('class','mark-complete-button');
    if (completed) {
      taskDiv.setAttribute('class','task completed');
    }
    markCompleteButton.addEventListener('click', function() {
      var completedClass = taskDiv.getAttribute('class');
      if (completedClass === 'task completed') {
        markTaskAsActive(id, function(response) {
          if (response.task) {
            taskDiv.removeAttribute('class');
            taskList = taskList.map(function(task) {
              if (task.id === response.task.id) {
                return response.task;
              }
              return task;
            })
            filterTasks();
            updateHelperButtons();
          }
        }, function(request, errorMsg) {
          console.error(errorMsg);
        })
      } else {
        markTaskAsComplete(id, function(response) {
          if (response.task) {
            taskDiv.setAttribute('class','completed');
            taskList = taskList.map(function(task) {
              if (task.id === response.task.id) {
                return response.task;
              }
              return task;
            })
            filterTasks();
            updateHelperButtons();
          }
        }, function(request, errorMsg) {
          console.error(errorMsg);
        })
      }
    });

    var removeButton = document.createElement('span');
    removeButton.setAttribute('class','remove-button');
    removeButton.innerHTML = "×";
    removeButton.addEventListener('click', function() {
      var parent = this.parentNode.parentNode;
      var child = this.parentNode;
      deleteOneTask(id, function(response) {
        if (response.success) {
          parent.removeChild(child);
          taskList = taskList.filter(function(task) {
            return !(task.id === id);
          });
          updateHelperButtons();
        }
      }, function(request, errorMsg) {
        console.error(errorMsg);
      })
    });

    taskContent.setAttribute('class', 'task-content');
    taskContent.innerHTML = content;
    taskDiv.appendChild(markCompleteButton);
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(removeButton);
    todoList.append(taskDiv);
  };

  var refreshTasks = function(isLoggedIn) {
    if (isLoggedIn) {
      getAllUserTasks(function(response) {
        taskList = response.tasks;
        filterTasks();
        updateHelperButtons();
      }, function(request, errorMsg) {
        console.error(errorMsg);
      })
    } else {
      taskList = [];
      filterTasks();
      updateHelperButtons();
    }
  };

  var filterTasks = function(addTasksToDOM) {
    var shouldAddTasksToDOM;
    if (addTasksToDOM === undefined) {
      shouldAddTasksToDOM = true;
    } else {
      shouldAddTasksToDOM = addTasksToDOM;
    }
    var filteredTaskList = taskList.filter(function(task) {
      if (filter === 'All') {
        return true;
      } else if (filter === 'Active') {
        return task.completed === false;
      } else {
        return task.completed === true;
      }
    });
    if (shouldAddTasksToDOM) {
      todoList.text('');
      filteredTaskList.forEach(function(task) {
        addTask(task.content, task.id, task.completed);
      })
    }
    return filteredTaskList;
  }

  $('.filter-button').click(function() {
    var filterType = $(this).attr('id');
    if (filter !== filterType) {
      $('.filter-button').removeClass('selected');
      $(this).addClass('selected');
      filter = $(this).attr('id');
      filterTasks();
      updateHelperButtons();
    }
  });

  $('#clear-completed').click(function() {
    $('#All').click();
    filterTasks();
    $('.completed > .remove-button').click();
  })

  $('#toggle-all').click(function() {
    var activeTasks = taskList.filter(function(task) {
      return !task.completed;
    });

    if (activeTasks.length > 0) {
      $('.task:not(.completed) > .mark-complete-button').click();
    } else if (taskList.length > 0) {
      $('.task > .mark-complete-button').click();
    }
  });

  var updateHelperButtons = function() {
    var activeTasks = taskList.filter(function(task) {
      return !task.completed;
    });
    // Toggle All Button
    var tasksCurrentlyDisplayed = filterTasks(false);
    if (tasksCurrentlyDisplayed.length > 0) {
      $('#toggle-all').css('display', 'block');
    } else {
      $('#toggle-all').css('display', 'none');
    }

    if (activeTasks.length === 0 && taskList.length > 0) {
      $('#toggle-all').addClass('active');
    } else {
      $('#toggle-all').removeClass('active');
    }

    // Footer
    if (taskList.length === 0) {
      $('#footer').css('display', 'none');
    } else {
      $('#footer').css('display', 'flex');
      if ((taskList.length - activeTasks.length) > 0) {
        $('#clear-completed').css('display', 'inline-block');
      } else {
        $('#clear-completed').css('display', 'none');
      }
    }
    $('#active-tasks').text(activeTasks.length);
  }

  $('#task-input').keypress(function (e) {
    var key = e.which;
    if (key == 13) {
      if (taskList.length < 10 && taskInput.val() !== '') {
        postTask(taskInput.val(), function(response) {
          if (response.task) {
            taskInput.val('');
            taskList.push(response.task);
            updateHelperButtons();
            if (filter !== 'Completed') {
              addTask(response.task.content, response.task.id, response.task.completed);
            }
          } else {
            console.log('Not logged in, cannot create new task.')
          }
        }, function(request, errorMsg) {
          console.error(errorMsg);
        });
      }
    }
  });

  $('#sign-up-form').hide();
  $('#toggle-login-form').hide();
  $('#sign-up-btn').hide();
  $('#log-out-btn').hide();
  $('#login-error').hide();
  $('#' + filter).addClass('selected');

  authenticateAndRefresh();

});
