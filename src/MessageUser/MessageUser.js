import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import STORE from '../STORE'
import Nav from '../Nav/Nav'

import './MessageUser.css'

export default function MessageUser(props) {
    const username = props.match.params.username;
    const posts = STORE.STORE;
    const matchedUser = posts.find(p => p.username === username)

    return (
        <section className="chat">
            <Nav />
            <form className="chatForm">
                <h1>Chat with {matchedUser.username}</h1>
                <label htmlFor="msg">Message</label>
                <textarea placeholder="Type message.." name="msg" rows="5" required></textarea>
                <button type="submit" className="btn">Send</button>
            </form>
        </section>
    
    )
}