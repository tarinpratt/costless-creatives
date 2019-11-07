import React, { Component } from 'react';
import config from '../config'
import TokenService from '../Services/Token-Service'
import './Profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        profile: [],
        profile_pic: '',
        bio: '',
        users: [],
        username: '',
        email: ''
    };     
}
componentDidMount() {
  const userId = this.props.match.params.userId
  fetch(`${config.API_ENDPOINT}/profile/${userId}`, {
    headers: {
      'authorization': `bearer ${TokenService.getAuthToken()}`,
    },
  })
      .then(res => {
        if(!res.ok)
          return res.json().then(error => Promise.reject(error))
          return res.json()
        })
      .then(responseData => {
        this.setState({
            id: responseData.id,
            profile_pic: responseData.profile_pic, 
            bio: responseData.bio, 
            profile: [...this.state.profile, responseData]
        })
      })
      .catch(error => {
          console.error(error)
          this.setState({error})
      })
    fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => {
        if(!res.ok)
          return res.json().then(error => Promise.reject(error))
          return res.json()
        })
      .then(responseData => {
        this.setState({
            id: responseData.id,
            username: responseData.username, 
            email: responseData.email, 
            users: [...this.state.users, responseData]
          })
      })
      .catch(error => {
          console.error(error)
          this.setState({error})
      })
    }
  render() {
  return (
      <section className="myProfile">
          <h1>{this.state.username}</h1>
          <div className="imgContainer">
            <img className="responsive" src={this.state.profile_pic} alt="profile"/>
          </div>
        <p>{this.state.bio}</p>
        <a href={`mailto:${this.state.email}?subject=A message from Costless Creatives&body=I saw your profile on Costless Creatives and am interested in connecting!`} className="messageLink">Message {this.state.username}</a>
      </section>
    )
  }  
}

export default Profile


