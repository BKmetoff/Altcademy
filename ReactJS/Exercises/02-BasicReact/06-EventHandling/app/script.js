var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Counter & buttons
var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = { count: 0 }; // initial state (value)

    // if addCount is not an arrow function, bind it to the class object:
    // this.addCount = this.addCount.bind(this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'addCount',
    value: function addCount(amount) {
      this.setState({
        count: this.state.count + amount
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Count ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.addCount(1);
            } },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.addCount(2);
            } },
          '+2'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.addCount(3);
            } },
          '+3'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

// log vertical scroll;


var ScrollLogger = function (_React$Component2) {
  _inherits(ScrollLogger, _React$Component2);

  function ScrollLogger(props) {
    _classCallCheck(this, ScrollLogger);

    var _this3 = _possibleConstructorReturn(this, (ScrollLogger.__proto__ || Object.getPrototypeOf(ScrollLogger)).call(this, props));

    _this3.state = { scrollY: 0 };
    _this3.updateScrollY = _this3.updateScrollY.bind(_this3);
    return _this3;
  }

  _createClass(ScrollLogger, [{
    key: 'updateScrollY',
    value: function updateScrollY(e) {
      this.setState({ scrollY: Math.round(window.scrollY) });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.updateScrollY);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.updateScrollY);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'logger' },
        'Scrolled: ',
        this.state.scrollY,
        'px'
      );
    }
  }]);

  return ScrollLogger;
}(React.Component);

;

var App = function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Counter, null),
    React.createElement(ScrollLogger, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));