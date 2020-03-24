import React from 'react';
import { json, checkStatus } from '../utils/utils.js'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

const Currency = (props) => {
  const { base, date, rates } = props.currency

  return (
    <p>{base}, {date}</p>
  )
}


class CurrencyTable extends React.Component {
  constructor (props) {
    super (props);
    this.state = { selectedCurrency: '', currencyData: [], date: '',  error: ''};
    this.userInput = this.userInput.bind(this);
  }

  userInput(event) {

    this.setState({ selectedCurrency: event.target.value})
    let {selectedCurrency} = this.state;

    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${selectedCurrency}`)
    .then(checkStatus)
    .then(json)    
    .then((data) => {
      this.setState({ currencyData: data.rates, date: data.date })
      console.log(this.state.currencyData);
    })
    .catch((error) => {
      console.log(error);
    })

  }

  // const DropDownChoice

  render () {
    const { selectedCurrency, currencyData, error} = this.state;
    return (
      <div>
        
        {/* TODO: bootstrap container, rows, etc... */}

        <h1>Table of shit</h1>
        <select
        className="btn btn-outline-danger currency-selector"
        name="currency-selector"
        onChange={this.userInput}>
          
          {/* placeholder, drop-down choice component */}

          <option value="BGN">BGN</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        {/* placeholder, currency list item component */}

      </div>
    )
  }
}

export default CurrencyTable;
