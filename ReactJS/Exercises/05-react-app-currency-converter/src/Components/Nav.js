import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link  } from 'react-router-dom';
import { updateSlogan } from '../utils/utils.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCommentsDollar } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faCommentsDollar)

class Nav extends React.Component {
  
  constructor (props) {
    super (props);
    this.state = { navSlogan: updateSlogan() }
  }

  componentDidMount () {
    this.setState({ navSlogan: updateSlogan() })
  }

  render () {
    return (
      <div id="sidebarWrapper">
        <div className="navLogo">
          <Link to="/">
            <FontAwesomeIcon icon={faCommentsDollar} />
          </Link>
          <p className="navSlogan">"{this.state.navSlogan}"</p>
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
}

export default Nav;
