import React from 'react';
import { checkStatus, json } from '../utils/utils.js'
import { Container, Row, Col, Button } from 'react-bootstrap'

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

  userInput(event) {
    // ignore clicks on the same currency
    if (event.target.name !== this.state.selectedCurrency) {
      this.fetchAllRates(event.target.name);
    }
  } 

  render () {
    const { selectedCurrency, currencyData } = this.state;
    return (
      
      <Container fluid>
        <Row>
          <Col>
            <h3>Currencies</h3>
            {Object.entries(currencyData).map((currency) => {
              const [ currencyName ] = currency;
              return <CurrencyButton
                key={currencyName}
                currencyName={currencyName}
                newCurrency={this.userInput}
                />
            })}
          </Col>
          
          <Col>
           <h3>{selectedCurrency} rates:</h3>
            {Object.entries(currencyData).map((currencyRate) => {
              const [ currencyName, value ] = currencyRate;
              return <Currency
                key={currencyName}
                value={value}
                currencyName={currencyName}
                />
            })}
          </Col>
        </Row>
      </Container>
    
    )
  }
}


class CurrencyButton extends React.Component {
  render () {
    const { currencyName, newCurrency } = this.props
    return (
      <Row>
        <Button
          variant="outline-info"
          name={currencyName}
          onClick={newCurrency}>{currencyName}
        </Button>
      </Row>
    )
  }
}

const Currency = (props) => {
  const {value, currencyName} = props;
  return (
    <Row> 
      <p>{currencyName} : {Number(value).toFixed(2)} </p>
    </Row>
  )
}

export default CurrencyTable;
