document.addEventListener("DOMContentLoaded", function() {
  var todoList = document.getElementById("todo-list");
  var todoInput = document.getElementById("todo-input");
  var addButton = document.getElementById("add-button");
  var divider = document.body.querySelector(".hidden");

  // create or remove to-do items:
  var addToDo = function () {
    var todoItemRow = document.createElement("div");
    todoItemRow.setAttribute("class", "row todoIn");
    todoItemRow.setAttribute("id", "todo-row");

    var todoItemContent = document.createElement("div");
    todoItemContent.setAttribute("class", "col-xs-10");

    var todoItemRemoveButton = document.createElement("div");
    todoItemRemoveButton.setAttribute("class", "col-xs-2");

    // remove item:
    var removeButton = document.createElement("button");
    removeButton.setAttribute("class", "btn btn-md btn-success");
    removeButton.innerHTML = "Done";

    removeButton.onclick = function () {

      if (todoList.children.length === 1) {
        divider.setAttribute("class", "hidden");
      };

      var child = this.parentNode.parentNode;
      todoList.removeChild(child);
    };

    var h5 = document.createElement("h5");
    h5.innerHTML = todoInput.value;


    todoItemContent.appendChild(h5);
    todoItemRemoveButton.appendChild(removeButton);

    todoItemRow.appendChild(todoItemContent);
    todoItemRow.appendChild(todoItemRemoveButton);

    todoList.appendChild(todoItemRow);
  }

  // add new item to list:
  var addButtonCheck = function () {
    if (todoInput.value !== '') {
      addToDo();
      todoInput.value = '';
      divider.removeAttribute("class", "hidden");
    }
  }

  addButton.addEventListener("click", addButtonCheck);

  todoInput.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
      addButtonCheck();
    }
  });

});
