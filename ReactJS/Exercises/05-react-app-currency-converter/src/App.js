import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import CurrencyTable from './Components/Currencies';
import Converter from './Components/Converter';
import NotFound from './Components/NotFound'


class App extends React.Component {
  render () {
    return (
      <Router>
        <div id="wrapper">
          <div className="App">
            
            <Nav />
            
            <div id="contentWrapper">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/converter" component={Converter} />
                <Route path="/currencies" component={CurrencyTable} />
                <Route component={NotFound}/>
              </Switch>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
