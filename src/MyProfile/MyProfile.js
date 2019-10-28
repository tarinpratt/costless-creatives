import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import STORE from '../STORE'
import './MyProfile.css'

class MyProfile extends Component {
  render() {
    const profile = STORE.STORE;
    const username = 'DanceLyfe';
    const findUser = profile.find((u => u.username === username))
  return (
      <section className="myProfile">
          <Nav />
          <h1>{findUser.username}</h1>
          <div className="profilePic" style={{backgroundImage: `url(${findUser.profile_pic})`}} >
            </div>
        <p>{findUser.bio}</p>
        <Link to={`/EditProfile/${findUser.username}`} className="messageLink">Edit Profile</Link>
      </section>
    )
  }  
}
export default MyProfile;