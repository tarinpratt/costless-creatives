import React, { Component } from 'react';
import Logo from '../images/logo.jpg';
import TokenService from '../Services/Token-Service'
import { Link } from 'react-router-dom'
import Nav from "../Nav/Nav"
import './Header.css';

class Header extends Component {
  handleLogoutClick = e => {
    TokenService.clearAuthToken() 
  }

  renderPrivateNav() {
    return (
      <div className="privateNav">
      <Nav /> 
      </div>
    )
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link className="acctButtons"
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <section className="headerContainer">
      <Link to='/SignUp' className="acctButtons">Sign Up</Link>
      <Link to='/LogInForm' className="acctButtons" >Log In</Link>
      <Link to='/Demo' className="acctButtons">Demo</Link>
      </section>
    )
  }
  render() {
  return (
      <header className='Header' role="banner">
        {
        TokenService.hasAuthToken()?
        this.renderLogoutLink()
        : this.renderLoginLink()
        } 
          <Link to='/'><img src={Logo} className="logo" alt="logo"/></Link>
        {
        TokenService.hasAuthToken() ?
        this.renderPrivateNav()
        : null
        } 
      </header>   
      )
    }
}
export default Header;