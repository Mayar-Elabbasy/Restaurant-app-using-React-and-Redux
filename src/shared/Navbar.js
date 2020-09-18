import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const Navbar1 = (props) => {
    const [isOpen, setIsOpen] = useState(false); 
    const toggle = () => setIsOpen(!isOpen);
    return (
    <div>
        <Navbar color="warning" light expand="md">
          <NavbarBrand href="/">Restaurant App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <NavLink href="./components">Menu</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className="nav-link"  to='/home'>
                  <span className="fa fa-home fa-lg"></span> 
                    Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/aboutus'>
                  <span className="fa fa-info fa-lg"></span> 
                    About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link"  to='/menu'>
                  <span className="fa fa-list fa-lg"></span> 
                    Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to='/contactus'>
                  <span className="fa fa-address-card fa-lg"></span> 
                    Contact Us
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Test
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Test 2
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>  
        <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>   
    );
}
  
