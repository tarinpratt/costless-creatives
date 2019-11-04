import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
import PostsApiService from '../Services/Posts-Api-Service'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Collab from '../images/collab.jpg';
import './Board.css'

class Board extends Component {
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
    componentDidMount(){
        PostsApiService.getPosts()
        .then((posts) => {
          return posts
        })
        .then((postList) => {
          this.setState({
            posts: postList
          })
        })
        PostsApiService.getUsers()
        .then((users) => {
          return users
        })
        .then((userList) => {
          this.setState({
            users: userList
          })
        })       
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
            this.props.history.push('/Board')
        })
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

  render() {
      const allPosts = this.state.posts
      const listOfPosts = allPosts.map((post, index) => (
          <section key={index} className="postings">
              <ul className="postingsList">
              <li className="postUsername">
                  <Link to={`/Profile/${post.user.id}`} className="profileLink">
                  <span><img src={Collab} className="collabPicBoard" alt="collaboration" /></span>
                  <span className="cut">View </span>
                  {post.user.username}'s 
                  <span className="cut">Profile</span>
                  </Link>
              </li>
              <li className="postDate">
                  {(moment(new Date(post.date)).format('MM / DD / YYYY'))}
              </li>
              <li className="postDescription">
                  {post.description}
              </li>
                  <img className="postImage" src={post.project_pic}/>
              </ul>
              <a href={`mailto:${post.user.email}`} className="messageLink">Message {post.user.username}</a>
          </section>
         ))     
  return (
      <section id="board">
          <h1 className="projectBoard">Project Board</h1>
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
      <p>Loading...</p>
      : null }
      <button type="submit" className="postSubmit">Post Project</button>
      </form>
      {listOfPosts}

  <div className="top">
    <span><FontAwesomeIcon icon={faArrowUp} size="1x" className="arrow" /></span>
    <a href="#board" className="backToTop">Back To Top</a>
    <span><FontAwesomeIcon icon={faArrowUp} size="1x" className="arrow" /></span>
  </div>
</section>
        )
    }
}

export default Board;