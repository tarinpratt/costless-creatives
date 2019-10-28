import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './EditProfile.css'

class EditProfile extends Component {
  render() {
   console.log(this.props.match.params)
  return (
      <section className="editProfile">
          <Nav />
    <form className="editProfileForm">
    <h1>Edit Profile</h1>
    <label htmlFor="editProfilePic" className="editProfilePic">
        Profile Picture
        <input 
        className="media"
        type="file" 
        name="pic" 
        accept="image/*">
        </input>
    </label>
    <label htmlFor="editBio" className="editBio">
        About Me
        <textarea
        className="editBio"
        name="editBio"
        type="text"
        rows="5"
        required>
        </textarea>
    </label>
    <button type="submit" className="btn">Save</button>
  </form>
      </section>
    )
  }  
}
export default EditProfile;