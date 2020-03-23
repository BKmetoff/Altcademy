import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      
      <Link className="navbar-brand"  to="/">
        <h2>Logo</h2>
      </Link>

      <ul className="navbar-nav">
        <Link className="nav-item"  to="/converter">
          <li className="nav-link">Converter</li>
        </Link>
        <Link className="nav-item" to="/currencies">
          <li className="nav-link">Currencies</li>
        </Link>
      </ul>
    </nav>
    
  );
}

export default Nav;
