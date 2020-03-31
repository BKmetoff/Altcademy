import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far, faDizzy } from '@fortawesome/free-regular-svg-icons'

library.add(far,faDizzy )

class NotFound extends React.Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="notFound">
                            <FontAwesomeIcon icon={faDizzy} />
                        </div>
                        <h2>
                            Nope, didn't find that!
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/">
                            <Button variant="light">Go Home</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NotFound;