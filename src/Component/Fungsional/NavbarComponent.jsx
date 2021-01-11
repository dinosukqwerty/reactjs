import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button
} from 'reactstrap';

import { NavLink } from 'react-router-dom' //dibikin supaya tidak bentrok antara reactstrap dengan rect-router-dom
import { CartContext } from '../../CartContext';
import { useContext } from 'react'

const NavbarComponent = (props) => {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const {value, setValue} = useContext(CartContext)  

    return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pemain" className="nav-link">DAFTAR PEMAIN</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/tampilmahasiswa" className="nav-link">DAFTAR MAHASISWA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Class" className="nav-link">ClassComp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Hooks" className="nav-link">HooksComp</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Datamahasiswauseeffect" className="nav-link">DataMahasiswaUseEffect</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/PRODUCT" className="nav-link">PRODUCT KAMI</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button color="danger">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <span className="badge badge-light">{value}</span>
            </Button>
          </NavbarText>
          <NavbarText>Sukma Rizki Andiantiko</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default NavbarComponent
