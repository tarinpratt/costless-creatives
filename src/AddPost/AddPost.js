import React, {Component} from 'react';
import PostsApiService from '../Services/Posts-Api-Service'
import './AddPost.css'

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: [],
            project_pic: '',
            description: '',
            loading: false  
        };   
        this.uploadImage = this.uploadImage.bind(this)  
    }

handleSubmit = ev => {
    ev.preventDefault()
    PostsApiService.postBoard(
        this.state.project_pic, 
        this.state.description
        )
        .then((post) => {
        this.setState({
            posts: [...this.state.posts, post]
        })
    })
    this.props.history.push('/MyPosts')
  }

handleChangeDescription = e => {
    this.setState({ description: e.target.value })
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
          project_pic: u,
          loading: false })     
      }   
    }       
  } 
  refreshPage() {
    window.location.reload(false);
  }

  render() {
      return (
        <form className="postBoard" onSubmit={this.handleSubmit}>
        <label htmlFor="description" className="post">
            Project Description
            <textarea
            className="description"
            name="description"
            type="text"
            rows="5"
            onChange={this.handleChangeDescription}
            required>
            </textarea>
        </label>
        <label htmlFor="pics" className="post">
            Upload Pictures
            <input 
            className="input-image"
            type="file" 
            name="pic" 
            onChange={this.uploadImage.bind(this)}
            accept="image/*">
            </input>
        </label>
        { this.state.loading === true ?
        <p className="loading">Loading Picture...</p>
        : null }
        <button type="submit" className="btn">Post Project</button>
        </form>

      )
  }
}
export default AddPost