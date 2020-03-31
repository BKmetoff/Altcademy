import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab, faGithub)

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
                    <li className="footerGit">v1.0</li>
                    <Link to="https://github.com/BKmetoff">
                        <li className="footerListItem">
                            <FontAwesomeIcon icon={faGithub} /> /bkmetoff
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default Footer