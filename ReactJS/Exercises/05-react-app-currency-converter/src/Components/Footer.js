import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {

    render () {
        return (
            <footer className="footer">
                <ul className="footerNav">
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
                <div>
                    <p>Version: 1.0</p>
                </div>
            </footer>
        )
    }
}

export default Footer