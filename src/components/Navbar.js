import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default (props) => (
  <Navbar dark expand="md">
      <div className="container">
          <NavbarBrand className="mr-auto" href="/">Vote</NavbarBrand>
          <Nav navbar className="m-auto">
          <NavItem>
              <NavLink className="nav-link" to='/ask'>New Question</NavLink>
          </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
              <NavItem>
                  <Button outline onClick={props.toggleModal}>Login</Button>
              </NavItem>
          </Nav>
      </div>
  </Navbar>
)
