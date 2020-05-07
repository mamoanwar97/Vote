import React, { Component } from 'react';
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

              <Navigate />

              <HeaderBody />

            </div>
        );
    }
}

export default Header;
