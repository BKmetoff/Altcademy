import React from 'react';
import { json, checkStatus } from '../utils/utils.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'


class  Converter extends React.Component  {
  constructor (props) {
    super (props);
    this.state = {
      currencyData: [],
      selectedInputCurrency: 'Currency', // will be rendered on load
      amountInputCurrency: 0,
      selectedOutputCurrency: 'Currency', // will be rendered on load
      amountOutputCurrency: 0,
      currencyRate: '',
      date: '',
      error: ''
    }
    this.selectCurrency = this.selectCurrency.bind(this);
    this.selectCurrencyValue = this.selectCurrencyValue.bind(this);
    this.calculateRate = this.calculateRate.bind(this);
  }
  
  componentDidMount () {
    
    // fetching data for USD, as the default base (EUR) does not include EUR in the response.
    // therefore, EUR would be missing from the drop-downs
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=USD`)
    .then(checkStatus)
    .then(json)    
    .then((data) => {
      this.setState({ currencyData: data.rates, date: data.date })
      // console.log(this.state.currencyData);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  selectCurrency (currencyName) {
    this.setState({ selectedInputCurrency: currencyName })
  }

  selectCurrencyValue (event) {
    this.setState({ selectCurrencyValue: event.target.value })
  }

  calculateRate () {
    console.log(this.state.selectedInputCurrency, this.state.selectCurrencyValue);
  }


  render () {
    const {
      currencyData,
      selectedInputCurrency,
      amountInputCurrency,
      selectedOutputCurrency,
      amountOutputCurrency
    } = this.state;
    return (
      <Container>
        
        {/* header  */}
        <Row>
          <Col>
            <h1>Single currency converter</h1>
          </Col>
        </Row>
  
        {/* user input */}
        <Row>
          <Col>
            <UserInputGroup
            currencyData={currencyData}
            selectCurrency={this.selectCurrency}
            selectedInputCurrency={selectedInputCurrency}
            selectCurrencyValue={this.selectCurrencyValue}
            amountInputCurrency={amountInputCurrency} />
          </Col>

          <Col>
            <UserInputGroup
            currencyData={currencyData}
            selectCurrency={this.selectCurrency}
            selectedInputCurrency={selectedInputCurrency}
            selectCurrencyValue={this.selectCurrencyValue}
            amountInputCurrency={amountInputCurrency} />
          </Col>
          
          <Col>
            <Button onClick={this.calculateRate}>
              Dollah dollah bills yo
            </Button>
          </Col>
        </Row>
  
      </Container>
    );
  }
  
}

class UserInputGroup extends React.Component {
  render () {
    const { 
      currencyData,
      selectCurrency,
      selectedInputCurrency,
      selectCurrencyValue
    } = this.props;
    
    return (
      <InputGroup>
        <FormControl
          placeholder="Amount"
          type="number"
          onChange={selectCurrencyValue}
          />
        <Dropdown>

          <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
            {selectedInputCurrency}
          </Dropdown.Toggle>
            
          <Dropdown.Menu>
          {Object.entries(currencyData).map(currency => {
            const [ currencyName ] = currency;
            return <InputCurrencyDropdown
              key={currencyName}
              currencyName={currencyName}
              selectedInputCurrency={selectedInputCurrency}
              selectCurrency={selectCurrency}
              />  
            })}
          </Dropdown.Menu>
        </Dropdown>
      </InputGroup>
    )
  }
}

class InputCurrencyDropdown extends React.Component {
  render () {
     
    const { currencyName, selectCurrency } = this.props    
    return (
      <Row>
        <Dropdown.Item
          name={currencyName}
          onClick={function () {selectCurrency(currencyName)} } >
          {currencyName}
        </Dropdown.Item>
      </Row>
    )
  }
}

export default Converter;
