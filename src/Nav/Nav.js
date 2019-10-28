import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  render() {
  return (
      <nav role="navigation">
          <Link to='/MyProfile' className="nav">Profile</Link>
          <Link to='/Messages' className="nav">Messages</Link>
          <Link to='/Board' className="nav">Project Board</Link>
      </nav>


        )
    }
}

export default Nav;