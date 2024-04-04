import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar} from 'react-bootstrap';
import cart from "../../logo.svg";
import { cartStore } from '../../util/CartStore';


function NavBar() {
  const count = cartStore((state) => state.count);
  return (
    <Navbar expand="md" className="fixed-top" bg='light'>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="mr-3" to="/">Home</Link>
            <Link className="mr-3" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <Link to="/checkout"><img src={cart} alt="shopping cart icon"/>{count}</Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;