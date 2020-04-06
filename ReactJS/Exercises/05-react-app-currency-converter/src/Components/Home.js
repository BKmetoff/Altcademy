import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

function Home() {
  return (
    
    <Container fluid className="homeContainer">
      <Row className="homeTitleWrapper">
        <p className="converterTitleFont">welcome to currency hub!</p>
      </Row>

      <Row className="titleSecondaryWrapper">
        <p className="homeTitleSecondaryFont">the oh so sweet  info you be lookin for</p>
      </Row>

      <Row className="homeNavigationWrapper">
          <Link to="/converter">
            <p className="homeNavButton">single currency converter</p>
          </Link>
          <Link to="/currencies">
            <p className="homeNavButton">currency exchange rates</p>
          </Link>
      </Row>
    </Container>
  );
}

export default Home;