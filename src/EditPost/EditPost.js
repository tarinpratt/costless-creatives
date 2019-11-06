import React, {Component} from 'react';
import config from '../config'
import TokenService from '../Services/Token-Service'
import './EditPost.css'

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      project_pic: '',
      description: '',
      loading: false
    };
    this.uploadImage = this.uploadImage.bind(this)
}
componentDidMount() {
    const postId = this.props.match.params.postId
    fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
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
                project_pic: responseData.project_pic, 
                description: responseData.description, 
                post: [...this.state.post, responseData]
            })
        })
        .catch(error => {
            console.error(error)
            this.setState({error})
        })
    }

  handleChangeDescription = e => {
    this.setState({ description : e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault()
    const { postId } = this.props.match.params
    const { id, project_pic, description } = this.state
    const updatedPost = {id, project_pic, description }
    fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedPost),
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
            this.resetFields(updatedPost)
            this.props.history.push('/MyPosts')
        })
        .catch(error => {
            console.error(error)
            this.setState({error})
        })
        }
        resetFields = (newFields) => {
        this.setState({
            id: newFields.id || '',
            project_pic: newFields.project_pic || '',
            description: newFields.description || ''
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
  this.setState ({
      loading: true
  })
  r.onreadystatechange = () => {
    if(r.status === 200 && r.readyState === 4) {
      let res = JSON.parse(r.responseText)
      u = `https://i.imgur.com/${res.data.id}.png`  
      this.setState({ 
          project_pic: u,
          loading: false })     
        }   
    }       
}

handleDelete = e =>  {
    e.preventDefault()
    const { postId } = this.props.match.params
    fetch(`${config.API_ENDPOINT}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
        .then(res => {
            if (!res.ok) {
            return res.json().then(error => Promise.reject(error))
        }
            this.props.history.push('/MyPosts')
        })
        .catch(error => {
            console.error(error)
        })
    }
  render() {
  return (
      <section className="editProfile">
        <form className="editProfileForm" onSubmit={this.handleSubmit}>
        <h1>Edit Post</h1>
        <label htmlFor="editProfilePic" className="editProfilePic">
            Project Picture
            <input 
            className="input-image"
            type="file" 
            name="project_pic" 
            onChange={this.uploadImage.bind(this)}
            accept="image/*">
            </input>
        </label>
        { this.state.loading === true ?
        <p>Loading Picture...</p>
        : null }
        <label htmlFor="editDescription" className="editDescription">
            Project Description
            <textarea
            className="editDescription"
            name="editDescription"
            type="text"
            rows="5"
            onChange={this.handleChangeDescription}
            >
            </textarea>
        </label>
        <button type="submit" className="btn">Save</button>
        <button type="submit" className="btn" onClick={this.handleDelete}>Delete</button>
        </form>
    </section>
    )
  }  
}
export default EditPost;