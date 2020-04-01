import React from 'react';
import { json, checkStatus, equation } from '../utils/utils.js'
import { Container, Row, Col, Form, Dropdown, FormControl, Button } from 'react-bootstrap' 

class  Converter extends React.Component  {
  constructor (props) {
    super (props);
    this.state = {
      currencyData: [],
      inputCurrency: 'From', // will be rendered on load
      outputCurrency: 'To', // will be rendered on load
      amountInputCurrency: 0,
      amountOutputCurrency: 0,
      currencyRate: 0,
      date: '',
      error: ''
    }
    this.selectCurrency = this.selectCurrency.bind(this);
    this.selectCurrencyValue = this.selectCurrencyValue.bind(this);
    this.fetchRate = this.fetchRate.bind(this);
    this.calculateRate = this.calculateRate.bind(this);
    this.swapCurrencies = this.swapCurrencies.bind(this);
  }
  
  componentDidMount () {
    
    // fetching data for USD on load, as the API
    // does not return data for EUR by default,  
    // therefore, EUR would be missing from the drop-downs below

    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=USD`)
    .then(checkStatus)
    .then(json)    
    .then((data) => {
      this.setState({ currencyData: data.rates, date: data.date })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  selectCurrency (currencyName, dropDownId) {
    if (dropDownId) { this.setState({ inputCurrency: currencyName }) } 
    else { this.setState({ outputCurrency: currencyName }) }
  }

  selectCurrencyValue (event) {
    if (parseFloat(event.target.value) !== 0) {
      this.setState({ amountInputCurrency: parseFloat(event.target.value) });  
    }

  }

  fetchRate () {

    // prevent redundant API calls
    if (this.state.amountInputCurrency !== 0
    &&  this.state.inputCurrency !== 'From' 
    &&  this.state.outputCurrency !== 'To') {      
      fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${this.state.inputCurrency}&symbols=${this.state.outputCurrency}`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        this.setState({ date: data.date })
        Object.entries(data.rates).map(currency => {
          let rate = currency[1];
          return this.setState({ currencyRate: Number(rate).toFixed(2) })
        })
      })
      .catch((error) => {
        console.log(error);
      })
      .then(this.calculateRate)
    }
    console.log('amount state: ' + this.state.amountInputCurrency);
    
  }

  calculateRate () {
    this.setState({ amountOutputCurrency: equation(this.state.amountInputCurrency, this.state.currencyRate) })
  }

  swapCurrencies () {    
    const buffer = [this.state.inputCurrency, this.state.outputCurrency];
    this.setState({
      inputCurrency: buffer[1],
      outputCurrency: buffer[0],
      currencyRate: 0,
      amountOutputCurrency: 0,
     })
  }

  render () {
    const {
      currencyData,
      inputCurrency,
      outputCurrency,
      amountOutputCurrency,
      currencyRate,
    } = this.state;

    // drop-down identifier
    let dropDownId = true;

    return (
      <Container fluid className="converterContainer">
        
        {/* header  */}
        <Row>
          <Col>
            <h1>Single currency converter</h1>
          </Col>
        </Row>
  

        {/* amount input */}
        <Row noGutters className="converterUserInput">

          <Col lg={9}>
            
            <Form>
              <FormControl
                placeholder="Amount"
                type="number"
                onChange={this.selectCurrencyValue}
                className="userAmountInput" />
            </Form>

            <Row noGutters>   

              {/* input currency */}              
              <Col>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="dropdownInputCurrency">
                    {inputCurrency}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {
                      Object.entries(currencyData).map(currency => {
                        const [ currencyName ] = currency;
                        return <CurrencyDropdownItem
                        key={currencyName}
                        currencyName={currencyName}
                        inputCurrency={inputCurrency}
                        selectCurrency={this.selectCurrency}
                        dropDownId={dropDownId}
                        />  
                      })
                    }
                  </Dropdown.Menu>
                </Dropdown>
              </Col>

              { dropDownId = false }

              {/* output currency */}
              <Col>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="dropdownOutputCurrency">
                    {outputCurrency}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {
                      Object.entries(currencyData).map(currency => {
                        const [ currencyName ] = currency;
                        return <CurrencyDropdownItem
                        key={currencyName}
                        currencyName={currencyName}
                        outputCurrency={outputCurrency}
                        selectCurrency={this.selectCurrency}
                        dropDownId={dropDownId}
                        />  
                      })
                    }
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>


          <Col lg={3}>
            <Button onClick={this.fetchRate} className="calculateButton">
              Go!
            </Button>
          </Col>  
        </Row>
        

        {/* output  */}
        <Row>
          <h2>{amountOutputCurrency}</h2>
        </Row>
        <Row>
          <h3>Rate: {currencyRate}</h3>
        </Row>
  
        <Button onClick={this.swapCurrencies}>Swap currencies</Button>
      </Container>
    );
  }
}

class CurrencyDropdownItem extends React.Component {
  render () {
    const { currencyName, selectCurrency, dropDownId } = this.props    
    
    return (
      <Dropdown.Item
        name={currencyName}
        onClick={function () {selectCurrency(currencyName, dropDownId)} } >
        {currencyName}
      </Dropdown.Item>
    )
  }
}

export default Converter;