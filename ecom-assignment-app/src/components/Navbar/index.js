import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import cart from "../../cart-white.png";
import { cartStore } from '../../util/CartStore';


function NavBar() {
  const count = cartStore((state) => state.count);
  return (
    <Navbar expand="md" className="fixed-top" bg='dark'>
      <Container>
        
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Brand className="text-info">eCOM</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="mr-3 text-light" to="/">Home</Link>
            <Link className="mr-3 text-light" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <Link className="text-light text-decoration-none" to="/checkout"><img src={cart} alt="shopping cart icon"/>{count}</Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;