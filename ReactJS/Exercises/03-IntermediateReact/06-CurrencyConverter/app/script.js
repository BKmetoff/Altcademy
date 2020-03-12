var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          handleChange = _props.handleChange;


      return React.createElement("input", { value: value, onChange: handleChange, type: "number" });
    }
  }]);

  return Input;
}(React.Component);

var Converter = function (_React$Component2) {
  _inherits(Converter, _React$Component2);

  function Converter(props) {
    _classCallCheck(this, Converter);

    var _this2 = _possibleConstructorReturn(this, (Converter.__proto__ || Object.getPrototypeOf(Converter)).call(this, props));

    _this2.toEuro = function (amount, rate) {
      return amount * rate;
    };

    _this2.toUsd = function (amount, rate) {
      return amount * (1 / rate);
    };

    _this2.state = { rate: 0.89, usd: 1, eur: 1 * 0.89 };

    _this2.handleUsdChange = _this2.handleUsdChange.bind(_this2);
    _this2.handleEurChange = _this2.handleEurChange.bind(_this2);
    return _this2;
  }

  _createClass(Converter, [{
    key: "convert",
    value: function convert(amount, rate, conversion) {
      var input = parseFloat(amount);

      if (Number.isNaN(input)) {
        return '';
      }

      return conversion(input, rate).toFixed(3);
    }
  }, {
    key: "handleUsdChange",
    value: function handleUsdChange(event) {
      var eur = this.convert(event.target.value, this.state.rate, this.toEuro);
      this.setState({ usd: event.target.value, eur: eur });
    }
  }, {
    key: "handleEurChange",
    value: function handleEurChange(event) {
      var usd = this.convert(event.target.value, this.state.rate, this.toUsd);
      this.setState({ eur: event.target.value, usd: usd });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          rate = _state.rate,
          usd = _state.usd,
          eur = _state.eur;


      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "text-center" },
          React.createElement(
            "h3",
            null,
            "Currency Converter"
          ),
          React.createElement(
            "h4",
            null,
            "1 USD : ",
            rate,
            " Euro"
          )
        ),
        React.createElement(
          "div",
          { className: "row text-center" },
          React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
              "span",
              null,
              "USD"
            ),
            React.createElement(Input, { value: usd, handleChange: this.handleUsdChange }),
            React.createElement(
              "span",
              null,
              "="
            ),
            React.createElement(Input, { value: eur, handleChange: this.handleEurChange }),
            React.createElement(
              "span",
              null,
              "EURO"
            )
          )
        )
      );
    }
  }]);

  return Converter;
}(React.Component);

ReactDOM.render(React.createElement(Converter, null), document.getElementById('root'));