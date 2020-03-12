class Input extends React.Component {
  render () {
    const { value, handleChange } = this.props;

    return <input value={value} onChange={handleChange} type="number"/>
  }
}

class Converter extends React.Component {
  constructor (props) {
    super (props);
    this.state = { rate: 0.89, usd: 1, eur: 1 * 0.89};

    this.handleUsdChange = this.handleUsdChange.bind(this);
    this.handleEurChange = this.handleEurChange.bind(this);
  }

  toEuro = (amount, rate) => amount * rate;
  toUsd = (amount, rate) => amount * (1 / rate);

  convert (amount, rate, conversion) {
    const input = parseFloat(amount);

    if (Number.isNaN(input)) { return ''; }

    return conversion(input, rate).toFixed(3);
  }

  handleUsdChange (event) {
    const eur = this.convert (event.target.value, this.state.rate, this.toEuro);
    this.setState ({ usd: event.target.value, eur });
  }

  handleEurChange (event) {
    const usd = this.convert (event.target.value, this.state.rate, this.toUsd);
    this.setState ({ eur: event.target.value, usd });
  }


  render () {
    const {rate, usd, eur}  = this.state;

    return (
      <div className="container">
        <div className="text-center">
          <h3>Currency Converter</h3>
          <h4>1 USD : {rate} Euro</h4>
        </div>

        <div className="row text-center">
          <div className="col-12">
            <span>USD</span>
            <Input value={usd} handleChange={this.handleUsdChange} />
            <span>=</span>
            <Input value={eur} handleChange={this.handleEurChange} />
            <span>EURO</span>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render (
  <Converter/>,
  document.getElementById('root')
)
