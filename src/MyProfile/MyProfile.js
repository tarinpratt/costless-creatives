import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import ProfileApiService from '../Services/Profile-Api-Service'
import Collab from '../images/collab.jpg';
import './MyProfile.css'

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        profiles: [],
        users: []  
    };     
}
componentDidMount(){
    ProfileApiService.getProfiles()
    .then((profiles) => {
      return profiles
    })
    .then((profileList) => {
      this.setState({
        profiles: profileList
      })
    })
    ProfileApiService.getUsers()
    .then((users) => {
      return users
    })
    .then((userList) => {
      this.setState({
        users: userList
      })
    })       
  }
  render() {  
    const userProfile = this.state.profiles
    const user_id = userProfile.map((val, index) => {
      return val.user_id
    })
    const users = this.state.users
    const currentUser = users.filter((user) => user.id === user_id[0])
    const currentUserVals = currentUser.map((val, index) => (
      <section key={index}>
        <h1>{val.username}</h1>
      </section>
    ))  
    const mapped = userProfile.map((val, index) => (
      <section className="myProfile" key={index}>
          {currentUserVals}
            <div className="imgContainer">
            <img className="responsive" src={val.profile_pic}/>
             </div>           
        <p>{val.bio}</p>
        <Link to={`/EditProfile/${val.user_id}`} className="messageLink">Edit Profile</Link>
      </section>
    ))
  return (
    <div>
      {mapped}
    <section className="addButton">
      {userProfile.length === 0
      ? <Link to='/AddProfile' className="addProfButton">Oops! You don't have a profile yet. Create one now!                  <span>
      <img src={Collab} className="collabPicProf" alt="collaboration" />
        </span></Link>
      : null }  
    </section> 
    </div>   )
  }  
}
export default MyProfile;