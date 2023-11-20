// src/components/NavBar/NavBar.js
import React from 'react';
import { Link,  useNavigate  } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
    // Redirect to the login page
    navigate('/login');
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/jobs">
            Jobs
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <Button onClick={handleLogout} variant="outline-primary">Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
