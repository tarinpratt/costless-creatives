import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import STORE from '../STORE'
import './Messages.css'

class Messages extends Component {
  render() {
    const msgs = STORE.STORE;
    const listMessages = msgs.map((message, index) => (
      <ul key={index} className="userMessages">
              <li className="messageWithUser">
              <Link to={`/MessageUser/${message.username}`} className="userMessageLink">{message.username}</Link>
              </li>
          </ul>
    ))
  return (
      <section className="messages">
          <Nav />
          {listMessages}
      </section>
    )
  }  
}
export default Messages;