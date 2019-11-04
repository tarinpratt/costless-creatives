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

  render() {
      const allPosts = this.state.posts
      const listOfPosts = allPosts.map((post, index) => (
          <section key={index} className="postings">
              <ul className="postingsList">
              <li className="postUsername">
                  <Link to={`/Profile/${post.user.id}`} className="profileLink">
                  <img src={Collab} className="collabPicBoard" alt="collaboration" />
                  <span className="cut">View </span>
                   {post.user.username}'s 
                  <span className="cut"> Profile</span>
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