import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import {setAuthedUser, unsetAuthedUser} from '../actions/auth'



class Navigate extends Component {

  login = (e, user = "tylermcginnis") => {
    this.props.dispatch(setAuthedUser(user));
  }

  logout = () => {
    this.props.dispatch(unsetAuthedUser());
  }

  render(){
    return (
      <Navbar dark expand="md">
          <div className="container">
              <NavbarBrand className="mr-auto">Vote</NavbarBrand>
              <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='/add'>New Question</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='/leaderboard'>Leaderboard</NavLink>
              </NavItem>
              </Nav>

                {
                  this.props.user?
                  (
                  <Nav className="ml-auto" navbar>
                    <NavItem className="p-1 m-1">
                      <Label>Welcome, {this.props.user}</Label>
                   </NavItem>
                   <NavItem>
                      <Button outline onClick={this.logout}>Logout</Button>
                   </NavItem>
                     </Nav>
                   )
                  :
                  (
                  <Nav className="ml-auto" navbar>
                  <NavItem>
                      <Button outline onClick={this.login}>Login</Button>
                  </NavItem>
                  </Nav>)
                }
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
