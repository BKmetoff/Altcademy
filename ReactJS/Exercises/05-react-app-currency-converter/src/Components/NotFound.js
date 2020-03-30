import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class NotFound extends React.Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Nope, didn't find that!</h2>
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