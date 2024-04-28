import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const NextElement = styled.div`
  padding-top: 5rem;
`;

export const Navigation = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <NextElement>
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
            {/* <img
            src="Cash_canvas.png"
            className="mr-3 h-6 sm:h-9"
            alt="Cash canvas Logo"
          /> */}
            Cash Canvas
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="dashboard">Dashboard</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
            <Nav.Link href="login">Sign-in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </NextElement>
  );
};

export default Navigation;
