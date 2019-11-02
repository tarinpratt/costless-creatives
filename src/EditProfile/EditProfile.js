import React, {Component} from 'react';
import config from '../config'
import TokenService from '../Services/Token-Service'
import './EditProfile.css'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      profile_pic: '',
      bio: ''
    };
    this.uploadImage = this.uploadImage.bind(this)
}
componentDidMount() {
    const profileId = this.props.match.params.profileId
    fetch(`${config.API_ENDPOINT}/profile/${profileId}`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
    }
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
  }

  // handleChangeProfile_Pic = e => {
  //   this.setState({ profile_pic: e.target.value })
  // };
  handleChangeBio = e => {
    this.setState({ bio : e.target.value })
  };


  handleSubmit = e => {
    e.preventDefault()
    const { profileId } = this.props.match.params
    const { id, profile_pic, bio } = this.state
    const updatedProfile = {id, profile_pic, bio }

    fetch(`${config.API_ENDPOINT}/profile/${profileId}`, {
   method: 'PATCH',
   body: JSON.stringify(updatedProfile),
   headers: {
      'content-type': 'application/json',
      'authorization': `bearer ${TokenService.getAuthToken()}`
 }
})
.then(res => {
  if(!res.ok)
      return res.json().then(error => Promise.reject(error))
})
.then(() => {
  this.resetFields(updatedProfile)
  this.props.history.push('/MyProfile')
})
.catch(error => {
  console.error(error)
  this.setState({error})
})

}
resetFields = (newFields) => {
  this.setState({
    id: newFields.id || '',
    profile_pic: newFields.profile_pic || '',
    bio: newFields.bio || ''
  })
}

uploadImage() {
  const r = new XMLHttpRequest()
  const d = new FormData()
  const e = document.getElementsByClassName('input-image')[0].files[0]
  let u

  d.append('image', e)

  r.open('POST', 'https://api.imgur.com/3/image/')
  r.setRequestHeader('Authorization', `Client-ID 1c71a0d4119b323`)
  r.send(d)
  r.onreadystatechange = () => {
    if(r.status === 200 && r.readyState === 4) {
      let res = JSON.parse(r.responseText)
      u = `https://i.imgur.com/${res.data.id}.png`  
      console.log(u) 
      this.setState({ profile_pic: u })     
    }   
  }       
}

  render() {
    console.log(this.state.profile_pic)
  return (
      <section className="editProfile">
    <form className="editProfileForm" onSubmit={this.handleSubmit}>
    <h1>Edit Profile</h1>
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
    <label htmlFor="editBio" className="editBio">
        About Me
        <textarea
        className="editBio"
        name="editBio"
        type="text"
        rows="5"
        onChange={this.handleChangeBio}
        >
        </textarea>
    </label>
    <button type="submit" className="btn">Save</button>
  </form>
      </section>
    )
  }  
}
export default EditProfile;