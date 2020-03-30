import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (

    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <Link to="/converter">
          <li className="sidebarListItem">Converter</li>
        </Link>
        <Link to="/currencies">
          <li className="sidebarListItem">Currencies</li>
        </Link>
      </ul>
    </div>    
  );
}

export default Nav;
