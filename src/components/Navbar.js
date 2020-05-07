import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class Navigate extends Component {

  render(){
    return (
      <Navbar dark expand="md">
          <div className="container">
              <NavbarBrand className="mr-auto" href="/">Vote</NavbarBrand>
              <Nav navbar className="m-auto">
              <NavItem>
                  <NavLink className="nav-link" to='/add'>New Question</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='/leaderboard'>Leaderboard</NavLink>
              </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                {
                  this.props.user &&
                  <NavItem className="p-1 m-1">
                      <Label>Welcome, {this.props.user} </Label>
                  </NavItem>
                }

                  <NavItem>
                      <Button outline onClick={this.props.toggleModal}>Login</Button>
                  </NavItem>
              </Nav>
          </div>
      </Navbar>
    );
  }
}

function mapStateToProps ({authedUser}) {
  const user = authedUser? authedUser : null;
  return {
    user
  };
}

export default connect(mapStateToProps)(Navigate);
