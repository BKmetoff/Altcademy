class Portfolio extends React.Component {
  constructor(props) {
    super (props);

    this.removeStock = this.removeStock.bind(this);
    this.editStock = this.editStock.bind(this);
    this.addStock = this.addStock.bind(this);
    this.addFormChange = this.addFormChange.bind(this);

    this.state = {
      portfolio: [
        {
          name: 'Feetbook',
          shares_owned: 20,
          cost_per_share: 50,
          market_price: 130
        },{
          name: 'Yamazon',
          shares_owned: 5,
          cost_per_share: 200,
          market_price: 500
        },{
          name: 'Snoozechat',
          shares_owned: 100,
          cost_per_share: 20,
          market_price: 3
        }
      ],
      form: {
        name: '',
        shares_owned: 0,
        cost_per_share: 0,
        market_price: 0
      }
    };
  }

  removeStock(stockIndex) {
    const portfolio = this.state.portfolio.slice(); // shallow copy
    portfolio.splice(stockIndex, 1); // remove value at index
    this.setState({ portfolio });
  }

  editStock (event, stockIndex) {
    const portfolio = this.state.portfolio.slice();
    const {name, value} = event.target;

    portfolio[stockIndex][name] = value;
    this.setState({ portfolio })
  }

  addStock (event) {
    event.preventDefault();
    const portfolio = this.state.portfolio.slice();

    portfolio.push(this.state.form);

    this.setState({
      portfolio,
      form: {name: '', shares_owned: 0, cost_per_share: 0, market_price: 0}
    });
  }

  addFormChange (event) {
    const { name, value } = event.target;
    const { form } = this.state;
    form[name] = value;
    this.setState({ form });
  }


  render () {

    const portfolio = this.state.portfolio;
    const form = this.state.form;

    const portfolio_market_value = portfolio.reduce((sum, stock) => stock.shares_owned * stock.market_price + sum, 0);
    const portfolio_cost = portfolio.reduce((sum, stock) => stock.shares_owned * stock.cost_per_share + sum, 0);
    const portfolio_gain_loss = portfolio_market_value - portfolio_cost;

    return (
      <div className="container">
        <h1 className="text-center">Stocks 'n' Stuff</h1>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                <th scope="col">Name</th>
                  <th scope="col">Shares Owned</th>
                  <th scope="col">Cost per share ($)</th>
                  <th scope="col">Market Price ($)</th>
                  <th scope="col">Market Value ($)</th>
                  <th scope="col">Unrealized Gain/Loss ($)</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {portfolio.map ((stockItem, stockIndex) => {

                  const {name, shares_owned, cost_per_share, market_price} = stockItem;
                  const market_value = shares_owned * market_price;
                  const unrealized_gain_loss = market_value - (shares_owned * cost_per_share);

                    return (
                      <tr key={stockIndex}>
                        <td>{name}</td>
                        <td><input className="form-control" onChange={(event) => this.editStock(event, stockIndex)} type="number" name="shares_owned" value={shares_owned} /></td>
                        <td><input className="form-control" onChange={(event) => this.editStock(event, stockIndex)} type="number" name="cost_per_share" value={cost_per_share} /></td>
                        <td><input className="form-control" onChange={(event) => this.editStock(event, stockIndex)} type="number" name="market_price" value={market_price} /></td>
                        <td>{market_value}</td>
                        <td>{unrealized_gain_loss}</td>
                        <td><button className="btn btn-outline-danger" onClick={() => this.removeStock(stockIndex)}>Remove</button></td>
                      </tr>
                    )
                })}
              </tbody>

            </table>
          </div>

          <form className="col-12 addStock" onSubmit={this.addStock}>
            <input className="form-control" name="name" type="text" placeholder="Name" value={form.name} required onChange={this.addFormChange}/>
            <input className="form-control" name="shares_owned" type="number" placeholder="Shares" value={form.shares_owned} onChange={this.addFormChange}/>
            <input className="form-control" name="cost_per_share" type="number" placeholder="Cost" value={form.cost_per_share} onChange={this.addFormChange}/>
            <input className="form-control" name="market_price" type="number" placeholder="Price" value={form.market_price} onChange={this.addFormChange}/>
            <button className="btn btn-outline-success">Add</button>
          </form>

          <div className="col-12 col-md-6">
            <h4>Portfolio value: $ {portfolio_market_value}</h4>
          </div>
          <div className="col-12 col-md-6">
            <h4>Portfolio gain/loss: $ {portfolio_gain_loss}</h4>
          </div>

        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
)
