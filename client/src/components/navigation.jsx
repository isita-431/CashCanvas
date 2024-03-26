import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Navbar
      bg="primary"
      variant="dark"
      style={{ backgroundColor: '#3808D8' }}
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand
          href="/"
          onClick={handleScrollToTop}
          style={{ color: '#9FFF62', fontSize: '1.5rem' }}
        >
          {/* <img
            src="Cash_canvas.png"
            className="mr-3 h-6 sm:h-9"
            alt="Cash canvas Logo"
          /> */}
          Cash Canvas
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="about" style={{ color: '#9FFF62' }}>
            About
          </Nav.Link>
          <Nav.Link href="services" style={{ color: '#9FFF62' }}>
            Services
          </Nav.Link>
          <Nav.Link href="Contact" style={{ color: '#9FFF62' }}>
            Contact
          </Nav.Link>
          <Nav.Link href="login" style={{ color: '#9FFF62' }}>
            Sign-in
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
