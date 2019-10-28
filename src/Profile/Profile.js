import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import STORE from '../STORE'
import './Profile.css'

export default function Profile(props) {
      const username = props.match.params.username
      const profiles = STORE.STORE;
      const findUser = profiles.find(u => u.username === username)
      console.log(findUser.username)
  return (
      <section className="myProfile">
          <Nav />
          <h1>{findUser.username}</h1>
          <div className="profilePic" style={{backgroundImage: `url(${findUser.profile_pic})`}} >
            </div>
        <p>{findUser.bio}</p>
        <Link to={`/MessageUser/${findUser.username}`} className="messageLink">Message {findUser.username}</Link>
      </section>
    )
  }  

