var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.state = { email: '', password: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var _state = this.state,
          email = _state.email,
          password = _state.password;

      console.log('submitted\nemail: ' + email + '\npassword: ' + password);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          email = _state2.email,
          password = _state2.password;


      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          null,
          'Email:',
          React.createElement('input', { type: 'email', name: 'email', value: email, onChange: this.handleChange })
        ),
        React.createElement(
          'label',
          null,
          'Password:',
          React.createElement('input', { type: 'password', name: 'password', value: password, onChange: this.handleChange })
        ),
        React.createElement('input', { type: 'submit', value: 'submit' })
      );
    }
  }]);

  return LoginForm;
}(React.Component);

ReactDOM.render(React.createElement(LoginForm, null), document.getElementById('root'));