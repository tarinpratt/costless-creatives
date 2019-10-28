import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import STORE from '../STORE'
import Nav from '../Nav/Nav'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Board.css'

class Board extends Component {

  render() {
      const posts = STORE.STORE;
      const listOfPosts = posts.map((post, index) => (
          <section key={index} className="postings">
              <ul className="postingsList">
              <li className="postUsername">
                      <Link to={`/Profile/${post.username}`} className="profileLink">{post.username}</Link>
                  </li>
                  <Link to={`/Profile/${post.username}`} className="pLink"><div className="postProfilePic" style={{backgroundImage: `url(${post.profile_pic})`}} >
             </div>
             </Link>
                  <li className="postDate">
                      {post.date}
                  </li>
                  <li className="postDescription">
                      {post.description}
                  </li>
                  <div className="postImage" style={{backgroundImage: `url(${post.image})`}} >
                  </div>
              </ul>
              <Link to={`/MessageUser/${post.username}`} className="messageLink">Message {post.username}</Link>
          </section>
      ))
      
  return (
      <section id="board">
          <Nav/>
          <h1 className="projectBoard">Project Board</h1>
    <form className="postBoard">
    <label htmlFor="description" className="post">
        Project Description
        <textarea
        className="description"
        name="description"
        type="text"
        rows="5"
        required>
        </textarea>
    </label>
    <label htmlFor="pics" className="post">
        Upload Pictures
        <input 
        className="media"
        type="file" 
        name="pic" 
        accept="image/*">
        </input>
    </label>
    <label htmlFor="vids" className="post">
        Upload Videos
        <input 
        className="media"
        type="file" 
        name="vids" 
        accept="video/*">
        </input>
    </label>
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