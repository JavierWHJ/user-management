import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './container/Home';

const App = () => {
  return (
      <div>
          <Header />
          <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                      <Home/>
                    </Col> 
                </Row>
            </Container>
      </div>
  );
}

export default App;
