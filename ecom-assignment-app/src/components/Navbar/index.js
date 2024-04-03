import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/cart" activeStyle>
                        Cart
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;