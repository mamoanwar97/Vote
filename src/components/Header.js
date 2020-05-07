import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap'
import Navigate from './Navbar.js'
import HeaderBody from './HeaderBody'



class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
      }

      handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
      }

      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

    render() {
        return(
            <div>

              <Navigate toggleModal={this.toggleModal}/>

              <HeaderBody />

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
                                  innerRef={(input) => this.password = input}  />
                          </FormGroup>
                          <FormGroup check>
                              <Label check>
                                  <Input type="checkbox" name="remember"
                                  innerRef={(input) => this.remember = input}  />
                                  Remember me
                              </Label>
                          </FormGroup>
                          <Button type="submit" value="submit" color="primary">Login</Button>
                      </Form>
                  </ModalBody>
              </Modal>
            </div>
        );
    }
}

export default Header;
