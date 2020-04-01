import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCommentsDollar } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faCommentsDollar)

function Nav() {
  return (
    <div id="sidebarWrapper">
      <div className="navBrand">
        <Link to="/">
          <FontAwesomeIcon icon={faCommentsDollar} />
        </Link>
        <p className="navLogo">"If ya know what ya got, then ya ain't got much!"</p>
      </div>
      
      <ul className="sidebarNav">
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
