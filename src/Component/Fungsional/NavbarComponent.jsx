import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavbarComponent = (props) => {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    

    return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pemain">DAFTAR PEMAIN</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Sukma Rizki Andiantiko</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default NavbarComponent
