var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
  _inherits(Portfolio, _React$Component);

  function Portfolio(props) {
    _classCallCheck(this, Portfolio);

    var _this = _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).call(this, props));

    _this.removeStock = _this.removeStock.bind(_this);
    _this.editStock = _this.editStock.bind(_this);
    _this.addStock = _this.addStock.bind(_this);
    _this.addFormChange = _this.addFormChange.bind(_this);

    _this.state = {
      portfolio: [{
        name: 'Feetbook',
        shares_owned: 20,
        cost_per_share: 50,
        market_price: 130
      }, {
        name: 'Yamazon',
        shares_owned: 5,
        cost_per_share: 200,
        market_price: 500
      }, {
        name: 'Snoozechat',
        shares_owned: 100,
        cost_per_share: 20,
        market_price: 3
      }],
      form: {
        name: '',
        shares_owned: 0,
        cost_per_share: 0,
        market_price: 0
      }
    };
    return _this;
  }

  _createClass(Portfolio, [{
    key: 'removeStock',
    value: function removeStock(stockIndex) {
      var portfolio = this.state.portfolio.slice(); // shallow copy
      portfolio.splice(stockIndex, 1); // remove value at index
      this.setState({ portfolio: portfolio });
    }
  }, {
    key: 'editStock',
    value: function editStock(event, stockIndex) {
      var portfolio = this.state.portfolio.slice();
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;


      portfolio[stockIndex][name] = value;
      this.setState({ portfolio: portfolio });
    }
  }, {
    key: 'addStock',
    value: function addStock(event) {
      event.preventDefault();
      var portfolio = this.state.portfolio.slice();

      portfolio.push(this.state.form);

      this.setState({
        portfolio: portfolio,
        form: { name: '', shares_owned: 0, cost_per_share: 0, market_price: 0 }
      });
    }
  }, {
    key: 'addFormChange',
    value: function addFormChange(event) {
      var _event$target2 = event.target,
          name = _event$target2.name,
          value = _event$target2.value;
      var form = this.state.form;

      form[name] = value;
      this.setState({ form: form });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var portfolio = this.state.portfolio;
      var form = this.state.form;

      var portfolio_market_value = portfolio.reduce(function (sum, stock) {
        return stock.shares_owned * stock.market_price + sum;
      }, 0);
      var portfolio_cost = portfolio.reduce(function (sum, stock) {
        return stock.shares_owned * stock.cost_per_share + sum;
      }, 0);
      var portfolio_gain_loss = portfolio_market_value - portfolio_cost;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'h1',
          { className: 'text-center' },
          'Stocks \'n\' Stuff'
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-12' },
            React.createElement(
              'table',
              { className: 'table' },
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Name'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Shares Owned'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Cost per share ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Market Price ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Market Value ($)'
                  ),
                  React.createElement(
                    'th',
                    { scope: 'col' },
                    'Unrealized Gain/Loss ($)'
                  ),
                  React.createElement('th', { scope: 'col' })
                )
              ),
              React.createElement(
                'tbody',
                null,
                portfolio.map(function (stockItem, stockIndex) {
                  var name = stockItem.name,
                      shares_owned = stockItem.shares_owned,
                      cost_per_share = stockItem.cost_per_share,
                      market_price = stockItem.market_price;

                  var market_value = shares_owned * market_price;
                  var unrealized_gain_loss = market_value - shares_owned * cost_per_share;

                  return React.createElement(
                    'tr',
                    { key: stockIndex },
                    React.createElement(
                      'td',
                      null,
                      name
                    ),
                    React.createElement(
                      'td',
                      null,
                      React.createElement('input', { className: 'form-control', onChange: function onChange(event) {
                          return _this2.editStock(event, stockIndex);
                        }, type: 'number', name: 'shares_owned', value: shares_owned })
                    ),
                    React.createElement(
                      'td',
                      null,
                      React.createElement('input', { className: 'form-control', onChange: function onChange(event) {
                          return _this2.editStock(event, stockIndex);
                        }, type: 'number', name: 'cost_per_share', value: cost_per_share })
                    ),
                    React.createElement(
                      'td',
                      null,
                      React.createElement('input', { className: 'form-control', onChange: function onChange(event) {
                          return _this2.editStock(event, stockIndex);
                        }, type: 'number', name: 'market_price', value: market_price })
                    ),
                    React.createElement(
                      'td',
                      null,
                      market_value
                    ),
                    React.createElement(
                      'td',
                      null,
                      unrealized_gain_loss
                    ),
                    React.createElement(
                      'td',
                      null,
                      React.createElement(
                        'button',
                        { className: 'btn btn-outline-danger', onClick: function onClick() {
                            return _this2.removeStock(stockIndex);
                          } },
                        'Remove'
                      )
                    )
                  );
                })
              )
            )
          ),
          React.createElement(
            'form',
            { className: 'col-12 addStock', onSubmit: this.addStock },
            React.createElement('input', { className: 'form-control', name: 'name', type: 'text', placeholder: 'Name', value: form.name, required: true, onChange: this.addFormChange }),
            React.createElement('input', { className: 'form-control', name: 'shares_owned', type: 'number', placeholder: 'Shares', value: form.shares_owned, onChange: this.addFormChange }),
            React.createElement('input', { className: 'form-control', name: 'cost_per_share', type: 'number', placeholder: 'Cost', value: form.cost_per_share, onChange: this.addFormChange }),
            React.createElement('input', { className: 'form-control', name: 'market_price', type: 'number', placeholder: 'Price', value: form.market_price, onChange: this.addFormChange }),
            React.createElement(
              'button',
              { className: 'btn btn-outline-success' },
              'Add'
            )
          ),
          React.createElement(
            'div',
            { className: 'col-12 col-md-6' },
            React.createElement(
              'h4',
              null,
              'Portfolio value: $ ',
              portfolio_market_value
            )
          ),
          React.createElement(
            'div',
            { className: 'col-12 col-md-6' },
            React.createElement(
              'h4',
              null,
              'Portfolio gain/loss: $ ',
              portfolio_gain_loss
            )
          )
        )
      );
    }
  }]);

  return Portfolio;
}(React.Component);

ReactDOM.render(React.createElement(Portfolio, null), document.getElementById('root'));