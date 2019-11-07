import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
import PostsApiService from '../Services/Posts-Api-Service'
import { faArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons";
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
            todaysPosts: true,
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
    renderTodaysPosts() {
      this.setState({
        todaysPosts: !this.state.todaysPosts
      })
    }
  render() {
      const allPosts = this.state.posts
      const todaysDate = moment(new Date).format('MM/DD/YY')
      const showByTodaysDate = allPosts.filter((dates) => (moment(dates.date).format('MM/DD/YY')) === todaysDate)
      const listOfTodaysPosts = showByTodaysDate.map((post, index) => (
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
              {post.project_pic.length === 0 ?
              null
              : <img className="postImage" src={post.project_pic} alt="project" />
              }  
            </ul>
            <a href={`mailto:${post.user.email}`} className="messageLink">Message {post.user.username}</a>
        </section>
       ))     
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
                {post.project_pic.length === 0 ?
                null
                : <img className="postImage" src={post.project_pic} alt="project" />
                }  
              </ul>
              <a href={`mailto:${post.user.email}`} className="messageLink">Message {post.user.username}</a>
          </section>
         ))     
  return (
      <section id="board">
          <h1 className="projectBoard">Project Board</h1>
          <div className="container">
          <div className="addPostContainer">
          <button className="viewToday" ><Link to='/AddPost' className="addPost"><span><FontAwesomeIcon icon={faPlus} size="1x" className="arrow" /></span>Add New Post</Link></button>
            {
              this.state.todaysPosts ?
            <button className="viewToday" onClick={()=>this.renderTodaysPosts()}>
              All Posts
            </button>
            : <button className="viewToday" onClick={()=>this.renderTodaysPosts()}>
              Today's Posts
            </button>
            }
            </div>
            </div>
     
            <div>
            {
              !this.state.todaysPosts ?
              <div>
              {listOfPosts}
              </div>
              :
              <div>
              {listOfTodaysPosts}
              </div>
            }
            </div>
      
     
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