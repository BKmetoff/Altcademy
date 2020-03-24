import React from 'react';
import { json, checkStatus } from '../utils/utils.js'

class CurrencyTable extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      selectedCurrency: 'EUR',
      currencyData: [],
      currencyName: '',
      currencyRate: '',
      date: '',
      error: ''
    };
    this.userInput = this.userInput.bind(this);
  }

  componentDidMount () {
    fetch(`https://alt-exchange-rate.herokuapp.com/latest`)
    .then(checkStatus)
    .then(json)    
    .then((data) => {
      this.setState({ currencyData: data.rates, date: data.date, selectedCurrency: data.base })
      console.log('default currency: ' + this.state.selectedCurrency);
    })
    .catch((error) => {
      console.log(error);
    })
    // console.log(this.state.currencyName);
  }

  userInput(event) {

    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${event.target.value}`)
    .then(checkStatus)
    .then(json)    
    .then((data) => {
      this.setState({ currencyData: data.rates, date: data.date, selectedCurrency: data.base })
      console.log('selected currency: ' + this.state.selectedCurrency);
    })
    .catch((error) => {
      console.log(error);
    })

  } 

  render () {
    const { selectedCurrency, currencyData } = this.state;
    return (
      <div>
        
        {/* TODO: bootstrap container, rows, etc... */}

        <h1>Table of stuff</h1>
        <select
          className="btn btn-outline-danger currency-selector"
          name="currency-selector"
          onChange={this.userInput}>
          
          {Object.entries(currencyData).map((currency) => {
            const [ currencyName ] = currency;
            return <DropDownChoice key={currencyName} currencyName={currencyName} />
          })}
        </select>

        {Object.entries(currencyData).map((currencyRate) => {
          const [ currencyName, value ] = currencyRate;
          return <Currency  key={currencyName} value={value} currencyName={currencyName} />
        })}
        
      </div>
    )
  }
}

const DropDownChoice = (props) => {
  // TODO: default choice - EUR
  const { currencyName } = props;
  return ( <option value={currencyName}>{currencyName}</option> )
}

const Currency = (props) => {
  const {value, currencyName} = props;
  return ( <p>{currencyName} : {value}</p> )
}

export default CurrencyTable;
