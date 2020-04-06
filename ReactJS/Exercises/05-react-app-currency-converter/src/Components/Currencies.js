import React from 'react';
import { checkStatus, json } from '../utils/utils.js'
import { Container, Row, Col } from 'react-bootstrap'

class CurrencyTable extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      selectedCurrency: 'USD',
      currencyData: [],
      currencyName: '',
      currencyRate: '',
      date: '',
      error: ''
    };
    this.userInput = this.userInput.bind(this);
    this.fetchAllRates = this.fetchAllRates.bind(this);
  }

  fetchAllRates (selectedCurrency) {
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${selectedCurrency}`)
    .then(checkStatus)
    .then(json)    
    .then((data) => {
      this.setState({ currencyData: data.rates, date: data.date, selectedCurrency: data.base })
      console.log('base currency: ' + this.state.selectedCurrency);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount () { this.fetchAllRates(this.state.selectedCurrency); }

  userInput(newCurrencyName) {
    // ignore clicks on the same currency
    if (newCurrencyName !== this.state.selectedCurrency) {
      this.fetchAllRates(newCurrencyName);
    }
  } 

  render () {
    const { selectedCurrency, currencyData } = this.state;
    return (
      
      <Container fluid className="currenciesContainer">
        
        <Row className="currenciesTitleWrapper">
            <p className="converterTitleFont">your currencies & rates</p>
        </Row>

        <Row className="titleSecondaryWrapper">
          <p className="converterTitleSecondaryFont">current base: {selectedCurrency}</p>
        </Row>
        
        <Row noGutters>
          <Col lg={3} xs={5} className="currencyChoiceWrapper">
            <ul>
              {Object.entries(currencyData).map((currency) => {
                  const [ currencyName ] = currency;
                  return <CurrencyButton
                    selectedCurrency={selectedCurrency}
                    key={currencyName}
                    currencyName={currencyName}
                    newCurrency={this.userInput}
                    />
                })}
            </ul>       
          </Col>

          <Col lg={9} xs={7} className="currenciesRatesWrapper">
            <ul>
              {Object.entries(currencyData).map((currencyRate) => {
                const [ currencyName, value ] = currencyRate;
                return <Currency
                  key={currencyName}
                  value={value}
                  currencyName={currencyName}
                  />
              })}
            </ul>
          </Col>
        </Row>        
      </Container>
    )
  }
}


class CurrencyButton extends React.Component {
  render () {
    const { currencyName, newCurrency, selectedCurrency } = this.props
    
    if (selectedCurrency === currencyName) {
      return (
        <li
          className="currencyListItem selectedCurrency"
          name={currencyName}
          onClick={function () {newCurrency(currencyName)}} >
          {currencyName}
        </li>
      )
    }
    
    return (
      <li
        className="currencyListItem"        
        name={currencyName}
        onClick={function () {newCurrency(currencyName)}} >
        {currencyName}
      </li>
    )
  }
}

const Currency = (props) => {
  const {value, currencyName} = props;
  return (
    <li className="rateListItem">
      {currencyName} : {Number(value).toFixed(2)}
    </li>
  )
}

export default CurrencyTable;
