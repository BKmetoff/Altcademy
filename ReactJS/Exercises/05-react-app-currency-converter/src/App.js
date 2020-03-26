import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';

import Nav from './Components/Nav';
import Home from './Components/Home';
import CurrencyTable from './Components/Currencies';
import Converter from './Components/Converter';



function App() {
  return (
    <Router>
      <div className="App">
        
        <Nav />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/converter" component={Converter} />
          <Route path="/currencies" component={CurrencyTable} />
          {/* placeholder for error page */}
        </Switch>
        {/* placeholder for loading animation ??  */}
        {/* placeholder for footer */}

      </div>
    </Router>
  );
}

export default App;
