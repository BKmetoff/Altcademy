import React from 'react';
import { Container, Row, Col, Form, Dropdown, FormControl, Button } from 'react-bootstrap' 
import {
  json,
  checkStatus,
  convertInputToOutput,
  convertOutputToInput,
  checkHidden,
  changeNavItemBackground
} from '../utils/utils.js'

class  Converter extends React.Component  {
  constructor (props) {
    super (props);
    this.state = {
      currencyData: [],
      inputCurrency: 'from', // will be rendered on load
      outputCurrency: 'to', // will be rendered on load
      amountInputCurrency: 0,
      amountOutputCurrency: '',
      currencyRate: '',
      date: '',
      error: '',
      isHidden: true // the OutputCurrency component will be rendered based on this
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

    changeNavItemBackground('converter')
  }

  selectCurrency (currencyName, dropDownId) {
    if (dropDownId) {
      this.setState({ inputCurrency: currencyName })
      this.setState({ isHidden: checkHidden(this.state.isHidden) })
      
    }  else {
      this.setState({ outputCurrency: currencyName })
      this.setState({ isHidden: checkHidden(this.state.isHidden) })
    }
  }

  selectCurrencyValue (event) {
    if (parseFloat(event.target.value) !== 0) {
      this.setState({ amountInputCurrency: parseFloat(event.target.value) });  
      this.setState({ isHidden: checkHidden(this.state.isHidden) });
    }
  }

  fetchRate () {

    // prevent redundant API calls
    if (this.state.amountInputCurrency !== 0
    &&  this.state.inputCurrency !== 'from' 
    &&  this.state.outputCurrency !== 'to') {      
      
      this.setState({ isHidden: true })
      
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
    
    this.setState({ isHidden: false })
  }

  swapCurrencies () {    
    const buffer = [ this.state.inputCurrency, this.state.outputCurrency ];
    this.setState({
      inputCurrency: buffer[1],
      outputCurrency: buffer[0],
      amountOutputCurrency: convertOutputToInput(this.state.amountInputCurrency, this.state.currencyRate),
      currencyRate: (1 / this.state.currencyRate).toFixed(4)
     })
  }

  calculateRate () {
    this.setState({ amountOutputCurrency: convertInputToOutput(this.state.amountInputCurrency, this.state.currencyRate) })
  }

  render () {
    const {
      currencyData,
      inputCurrency,
      outputCurrency,
      amountInputCurrency,
      amountOutputCurrency,
      currencyRate,
      isHidden
    } = this.state;

    // drop-down identifier
    let dropDownId = true;

    return (
      <Container fluid className="converterContainer">
        
        {/* header  */}
        <Row className="converterTitleWrapper">
          <p className="converterTitleFont">your currency converter</p>
        </Row>
  

        {/* amount input */}
        <Row noGutters className="converterUserInput">

          <Col lg={9}>
            
            <Form>
              <FormControl
                placeholder="amount"
                type="number"
                onChange={this.selectCurrencyValue}
                className="userAmountInput" />
            </Form>

            <Row noGutters>   

              {/* input currency */}              
              <Col>
                <Dropdown className="dropdownInputCurrencyWrapper">
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
                <Dropdown className="dropdownOutputCurrencyWrapper">
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
              go!
            </Button>
          </Col>  
        </Row>
        

        {/* output  */}
        { !isHidden ? (
            <CurrencyOutput
              amountInputCurrency={amountInputCurrency}
              inputCurrency={inputCurrency}
              amountOutputCurrency={amountOutputCurrency}
              outputCurrency={outputCurrency}
              currencyRate={currencyRate}
              swapCurrencies={this.swapCurrencies}
              />
            ) : (
              null
            ) 
          }
        
      </Container>
    );
  }
}

class CurrencyOutput extends React.Component {
  render () {
    const { 
      amountInputCurrency,
      inputCurrency,
      amountOutputCurrency,
      outputCurrency,
      currencyRate,
      swapCurrencies
    } = this.props

    return (
      <Row className="converterOutputWrapper no-gutters">
        <div className="converterTitleFont outputPadding">
          <p>{amountInputCurrency} {inputCurrency} = {amountOutputCurrency} {outputCurrency} </p>
        </div>
        <div className="converterTitleSecondaryFont outputPadding">
          <p>1 {inputCurrency} = {currencyRate} {outputCurrency} </p>
        </div>
        <div className="outputPadding">
          <Button className="converterOutputSwitch" onClick={swapCurrencies}>swap currencies</Button>
        </div>
      </Row>
    )
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