import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Title</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features" className='fw-bold'>Home</Nav.Link>
                        <Nav.Link href="#pricing" className='fw-bold'>Product &amp; Services</Nav.Link>
                        <Nav.Link href="#pricing" className='fw-bold'>Become a Client</Nav.Link>
                        <Nav.Link href="#pricing" className='fw-bold'>About us</Nav.Link>

                    </Nav>
                    <Nav>
                        <Button>Login</Button>
                        <Button className='ms-2 inline-block'>Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;