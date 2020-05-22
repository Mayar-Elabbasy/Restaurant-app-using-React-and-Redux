import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

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
              <NavItem>
                <NavLink href="./components">Menu</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Options
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        test
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        1
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>   
    </div>   
    );
}
  
