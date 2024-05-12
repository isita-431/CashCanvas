import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ paddingTop: '5rem' }}>
      <Navbar
        bg="primary"
        variant="dark"
        style={{
          backgroundColor: '#3808D8',
          position: 'fixed',
          top: 0,
          width: '100%',
          marginBottom: '1rem'
        }}
      >
        <Container>
          <Navbar.Brand
            href="/main"
            onClick={handleScrollToTop}
            style={{ fontSize: '1.5rem' }}
          >
            Cash Canvas
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="dashboard" className="page-scroll">
              Dashboard
            </Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="login">Sign-in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
