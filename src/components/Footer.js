import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col>
            <h5>Our Service</h5>
            <p>Water Cleaning</p>
          </Col>
          <Col>
            <h5>Information</h5>
            <p>Email: example@example.com</p>
            <p>Mobile: +1234567890</p>
            <p>Address: 123 Street Name, City</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-muted small">
              &copy; {(new Date().getFullYear())} Company Name ™. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
