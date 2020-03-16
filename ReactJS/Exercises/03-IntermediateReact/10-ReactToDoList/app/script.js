var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// API key: 104

var checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  throw new Error('Request failed');
};

var json = function json(response) {
  return response.json();
};

var ToDoList = function (_React$Component) {
  _inherits(ToDoList, _React$Component);

  function ToDoList(props) {
    _classCallCheck(this, ToDoList);

    var _this = _possibleConstructorReturn(this, (ToDoList.__proto__ || Object.getPrototypeOf(ToDoList)).call(this, props));

    _this.state = { new_task: '', tasks: [] };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ToDoList, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ new_task: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104").then(checkStatus).then(json).then(function (response) {
        console.log(response);
        _this2.setState({ tasks: response.tasks });
      }).catch(function (error) {
        console.error(error.message);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          new_task = _state.new_task,
          tasks = _state.tasks;


      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-12' },
            React.createElement(
              'h2',
              null,
              'To Do List'
            ),
            tasks.length > 0 ? tasks.map(function (task) {
              return React.createElement(Task, { key: task.id, task: task });
            }) : React.createElement(
              'p',
              null,
              'No items'
            ),
            React.createElement(
              'form',
              { onSubmit: this.handleSubmit, className: 'form-inline' },
              React.createElement('input', {
                type: 'text',
                className: 'form-contol',
                placeholder: 'What\'s next?',
                value: new_task,
                onChange: this.handleChange
              }),
              React.createElement(
                'button',
                { type: 'submit', className: 'btn btn-sm btn-outline-primary' },
                'Save'
              )
            )
          )
        )
      );
    }
  }]);

  return ToDoList;
}(React.Component);

var Task = function (_React$Component2) {
  _inherits(Task, _React$Component2);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  _createClass(Task, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          task = _props.task,
          onDelete = _props.onDelete,
          onComplete = _props.onComplete;
      var id = task.id,
          content = task.content,
          completed = task.completed;


      return React.createElement(
        'div',
        { className: 'row pb-2 border-bottom mb-1 mt-2' },
        React.createElement(
          'p',
          { className: 'col' },
          content
        ),
        React.createElement(
          'div',
          { className: 'btn-group-toggle', 'data-toggle': 'buttons' },
          React.createElement(
            'button',
            {
              className: 'btn btn-sm btn-outline-danger',
              onClick: function onClick() {
                return onDelete(id);
              } },
            'Delete'
          ),
          React.createElement(
            'label',
            { className: 'btn btn-info btn-sm active' },
            React.createElement('input', {
              type: 'checkbox',
              onChange: function onChange() {
                return onComplete(id, completed);
              },
              checked: completed })
          )
        )
      );
    }
  }]);

  return Task;
}(React.Component);

ReactDOM.render(React.createElement(ToDoList, null), document.getElementById('root'));