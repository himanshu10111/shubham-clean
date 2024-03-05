import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav links aligned to the right with ml-auto */}
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Logo aligned to the left */}
        <Navbar.Brand href="#home">
          <span>My Logo</span> {/* Placeholder for logo, replace <span> with <img> tag for your logo */}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
