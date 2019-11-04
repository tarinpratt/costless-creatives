import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
  render() {
  return (
      <nav role="navigation">
          <Link to='/MyProfile' className="nav">Profile</Link>
          <Link to='/Board' className="nav">Project Board</Link>
          <Link to='/MyPosts' className="nav">My Posts</Link>
      </nav>


        )
    }
}

export default Nav;