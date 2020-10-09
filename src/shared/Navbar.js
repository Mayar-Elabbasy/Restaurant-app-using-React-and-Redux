import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody,
    Form, 
    FormGroup, 
    Input, 
    Label
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Navbar1 extends Component {

    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
            isModalOpen: false,  
        };
    }

    toggle = () => this.setState({isOpen:!this.state.isOpen});

    toggleModal = () => this.setState({isModalOpen:!this.state.isModalOpen});

    handleLogin = (event) =>{
        this.toggleModal();
        alert("Username: " + this.username.value + 
              " Password: " + this.password.value +
              " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render(){
    return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">Restaurant App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
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
          <Nav className="ml-auto" navbar>
            <NavItem>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"></span>
                    Login
                </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={this.handleLogin}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username"
                      innerRef={(input) => this.username = input} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password"
                      innerRef={(input) => this.password = input} />
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" name="remember"
                      innerRef={(input) => this.remember = input} />
                        Remember me
                    </Label>
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                    Login
                </Button>
            </Form>
        </ModalBody>
      </Modal>
    </div>   
    );
  }
}

export default Navbar1;