import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { json, checkStatus } from '../utils/utils.js'

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
  }

  componentDidMount () {
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=USD`)
    .then(checkStatus)
    .then(json)    
    .then((data) => {
      this.setState({ currencyData: data.rates, date: data.date, selectedCurrency: data.base })
      console.log('default currency: ' + this.state.selectedCurrency);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  userInput(event) {
    
    if (event.target.name !== this.state.selectedCurrency) {
      fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${event.target.name}`)
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
  } 

  render () {
    const { selectedCurrency, currencyData } = this.state;
    return (
      
      <Container>
        <Row>
          <Col>
            <h3>Currencies</h3>

            {Object.entries(currencyData).map((currency) => {
              const [ currencyName ] = currency;
              return <CurrencyButton
                key={currencyName}
                currencyName={currencyName}
                newCurrency={this.userInput} />
            })}

          </Col>
          <Col>

           <h3>{selectedCurrency} rates:</h3>

            {Object.entries(currencyData).map((currencyRate) => {
              const [ currencyName, value ] = currencyRate;
              return <Currency  key={currencyName} value={value} currencyName={currencyName} />
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
         <Button variant="outline-info" name={currencyName} onClick={newCurrency}>{currencyName}</Button>
        </Row>
      )
  }
}

const Currency = (props) => {
  const {value, currencyName} = props;
  return (
    <Row> 
      <p>{currencyName} : {value} </p>
    </Row>
  )
}

export default CurrencyTable;
