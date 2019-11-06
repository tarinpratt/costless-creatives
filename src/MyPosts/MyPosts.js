import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'
import PostsApiService from '../Services/Posts-Api-Service'
import ProfileApiService from '../Services/Profile-Api-Service'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MyPosts.css'

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
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
        ProfileApiService.getProfiles()
        .then((profiles) => {
          return profiles
        })
        .then((profileList) => {
          this.setState({
            profiles: profileList
            })
          })    
        }

  render() {
      const allProfiles = this.state.profiles
      const user_id = allProfiles.map((val, index) => {
        return val.user_id
      })  
      const currentPosts = this.state.posts.filter((post) => post.user.id === user_id[0])
      console.log(currentPosts)
      const listOfPosts = currentPosts.map((post, index) => (
          <section key={index} className="postings">
              <ul className="postingsList">
                <li className="postDate">
                    {(moment(new Date(post.date)).format('MM / DD / YYYY'))}
                </li>
                <li className="postDescription">
                    {post.description}
                </li>
                {post.project_pic.length === 0 ?
                null
                : <img className="postImage" src={post.project_pic} alt="project"/>
                }
                  
              </ul>
              <Link to={`/EditPost/${post.id}`} className="messageLink">Edit Post</Link>
          </section>
      ))   
  return (
      <section id="board">
          <h1 className="projectBoard">My Posts</h1>
          {listOfPosts.length === 0 ?
          <p className="noPosts">Uh oh... You have no posts! Create a post?<span><Link to='/AddPost' className="goToBoard">Go!</Link></span></p>
          : <section>{listOfPosts}</section>}
          {listOfPosts.length > 0 ?
          <div className="top">
          <span><FontAwesomeIcon icon={faArrowUp} size="1x" className="arrow" /></span>
          <a href="#board" className="backToTop">Back To Top</a>
          <span><FontAwesomeIcon icon={faArrowUp} size="1x" className="arrow" /></span>
          </div>
          : null}
      </section>
        )
    }
}

export default MyPosts;