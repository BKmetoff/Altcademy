import React from 'react';
import { changeNavItemBackground } from '../utils/utils.js'
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

class Home extends React.Component {
  
  componentDidMount () { changeNavItemBackground() }
  
  render () {
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
  
}

export default Home;