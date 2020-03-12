var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpForm = function (_React$Component) {
  _inherits(SignUpForm, _React$Component);

  function SignUpForm(props) {
    _classCallCheck(this, SignUpForm);

    var _this = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, props));

    _this.state = { email: '', password: '', bio: '', age: '<20', sub: false };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(SignUpForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          type = _event$target.type;

      // handle checkbox

      var value = void 0;
      switch (type) {
        case 'checkbox':
          value = event.target.checked;
          break;
        default:
          value = event.target.value;
      }

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      var _state = this.state,
          email = _state.email,
          password = _state.password,
          bio = _state.bio,
          age = _state.age,
          sub = _state.sub;

      console.log('submitted\nemail: ' + email + '\npassword: ' + password + '\nbio: ' + bio + '\nage: ' + age + '\nsub: ' + sub);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          email = _state2.email,
          password = _state2.password,
          bio = _state2.bio,
          age = _state2.age,
          sub = _state2.sub;


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
        React.createElement(
          'label',
          null,
          'Bio:',
          React.createElement('textarea', { name: 'bio', value: bio, onChange: this.handleChange })
        ),
        React.createElement(
          'label',
          null,
          'Age:',
          React.createElement(
            'select',
            { name: 'age', value: age, onChange: this.handleChange },
            React.createElement(
              'option',
              { value: '<20' },
              '20 or younger'
            ),
            React.createElement(
              'option',
              { value: '21-30' },
              '21 to 30'
            ),
            React.createElement(
              'option',
              { value: '31-40' },
              '31 to 40'
            ),
            React.createElement(
              'option',
              { value: '41-50' },
              '41 to 50'
            ),
            React.createElement(
              'option',
              { value: '>51' },
              '51 or older'
            )
          )
        ),
        React.createElement(
          'label',
          null,
          'Sub checkbox:',
          React.createElement('input', { name: 'sub', type: 'checkbox', checked: sub, onChange: this.handleChange })
        ),
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'submit', value: 'submit' })
        )
      );
    }
  }]);

  return SignUpForm;
}(React.Component);

ReactDOM.render(React.createElement(SignUpForm, null), document.getElementById('root'));