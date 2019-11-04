import React, {Component} from 'react';
import ProfileApiService from '../Services/Profile-Api-Service'
import './AddProfile.css'

class AddProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: [],
            profile_pic: '',
            selectedFile: null,
            bio: '',
            loading: false
        };
        this.uploadImage = this.uploadImage.bind(this)
    }

      handleSubmit = ev => {
        ev.preventDefault()
        ProfileApiService.postProfile(
            this.state.profile_pic, 
            this.state.bio
            )
            .then((profile) => {
            this.setState({
                profile: [...this.state.profile, profile]
            })
            this.props.history.push('/MyProfile')
        })
      }

      handleChangeBio = e => {
        this.setState({ bio: e.target.value })
      };

      uploadImage() {
        const r = new XMLHttpRequest()
        const d = new FormData()
        const e = document.getElementsByClassName('input-image')[0].files[0]
        let u
        d.append('image', e)
        r.open('POST', 'https://api.imgur.com/3/image/')
        r.setRequestHeader('Authorization', `Client-ID 1c71a0d4119b323`)
        r.send(d)
        this.setState({
          loading: true
        })
        r.onreadystatechange = () => {
          if(r.status === 200 && r.readyState === 4) {
            let res = JSON.parse(r.responseText)
            u = `https://i.imgur.com/${res.data.id}.png`  
            this.setState({ 
              profile_pic: u,
              loading: false })     
          }   
        }       
      }

  render() {
  return (
      <section className="editProfile">
    <form className="editProfileForm" role='post' onSubmit={this.handleSubmit}>
    <h1>Add Profile</h1>
    <label htmlFor="editProfilePic" className="editProfilePic">
        Profile Picture
        <input 
        className="input-image"
        type="file" 
        name="profile_pic" 
        onChange={this.uploadImage.bind(this)}
        accept="image/*">
        </input>
    </label>
    { this.state.loading === true ?
    <p className="loading">Loading...</p>
    : null } 
    <label htmlFor="editBio" className="editBio">
        About Me
        <textarea
        className="editBio"
        name="bio"
        type="text"
        rows="5"
        onChange={this.handleChangeBio}
        required>
        </textarea>
    </label>
    <button type="submit" className="btn">Save</button>
  </form>
      </section>
    )
  }  
}
export default AddProfile;