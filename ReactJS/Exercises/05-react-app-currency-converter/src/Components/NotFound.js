import React from 'react';
import { Link } from 'react-router-dom'
import { changeNavItemBackground } from '../utils/utils.js'
import { Container, Row  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far, faDizzy } from '@fortawesome/free-regular-svg-icons'

library.add(far,faDizzy )

class NotFound extends React.Component {
    componentDidMount () { changeNavItemBackground() }
    render () {
        return (
            <Container className="notFoundContainer">
                <Row className="notFoundWrapper">
                    <div className="notFoundIcon">
                        <FontAwesomeIcon icon={faDizzy} />
                    </div>
                    <p className="notFoundSecondaryFont">Nope, didn't find that!</p>
                    <Link to="/">
                        <p className="goHomeButton">go home</p>
                    </Link>
                </Row>
            </Container>
        )
    }
}

export default NotFound;