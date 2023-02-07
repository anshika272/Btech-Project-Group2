import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar class="navbar" variant="light"  expand="lg">
      <Container>
        <Navbar.Brand  href="#home">Smart Decision Analytics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end navitems">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Item>
            <NavDropdown className = "dropdown" title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               FAQ        
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            </Nav.Item>
           <Nav.Item>
           <Nav.Link href="#link">
              <img class="user-image" src = {require("../user1.png")}/>
              </Nav.Link>
           </Nav.Item>
           </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;