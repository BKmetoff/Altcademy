import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab, faGithub, faBookOpen)

class Footer extends React.Component {
        
    render () {
        return (
            
            <div className="footer">
                <ul className="footerLeft">
                    <Link to="/">
                        <li className="footerListItem">Home</li>
                    </Link>
                    <Link to="/Converter">
                        <li className="footerListItem">Converter</li>
                    </Link>
                    <Link to="/Currencies">
                        <li className="footerListItem">Currencies</li>
                    </Link>
                </ul>
                
                <ul className="footerRight">
                    
                    <li>
                        <a
                            className="footerListItem"
                            href="https://github.com/BKmetoff"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> /bkmetoff
                        </a>
                    </li>
                    <li>
                        <a
                            className="footerListItem"
                            href="https://www.altcademy.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faBookOpen} /> Altcademy
                        </a>
                    </li>
                
                    <li className="footerVersion">v1.1</li>
                </ul>
            </div>
        )
    }
}

export default Footer