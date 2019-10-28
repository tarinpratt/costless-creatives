import React, { Component } from 'react';
import Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
    constructor() {
        super();
        
        this.state = {
            showLogInForm: false,
        }
        this.showLogInForm = this.showLogInForm.bind(this);
        this.closeLogInForm = this.closeLogInForm.bind(this);
      }

      showLogInForm(event) {
        event.preventDefault();
        
        this.setState({ showLogInForm: true }, () => {
          document.addEventListener('click', this.closeLogInForm);
        });
      }

      closeLogInForm() {
        this.setState({ showLogInForm: false }, () => {
          document.removeEventListener('click', this.closeLogInForm);
        });
      }

    render() {
        return (
            <header className='Header' role="banner">
                <section className="headerContainer">
                <Link to='/SignUp' className="acctButtons">Sign Up</Link>
                <Link to='/Board' className="acctButtons">Demo</Link>
                <button className="acctButtons" onClick={this.showLogInForm}>Log In</button>
                </section>
                <Link to='/'><img src={Logo} className="logo" alt="logo"/></Link>

                {
          this.state.showLogInForm
            ? (
              <form className="logInForm">
                  <label htmlFor="username">
                      Username
                      <input
                      name="username"
                      type="text"
                      required>
                      </input>
                  </label>
                  <label htmlFor="password">
                      Password
                      <input
                      name="password"
                      type="password"
                      required>
                      </input>
                  </label>
                  <button type="submit" className="logInSubmit">
                      Log In
                  </button>

              </form>
            )
            : (
              null
            )
        }
        
            </header>   

        )
    }
}
export default Header;