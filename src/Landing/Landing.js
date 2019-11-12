import React, {Component} from 'react';
import Collab from '../images/collab.jpg';
import './Landing.css'

class Landing extends Component {
  render() {
  return (
  <section className="landing">
      <h2>A place for creatives in the entertainment field to collaborate, exchange, and network without the question of money!</h2>
      <img src={Collab} className="collabPic" alt="collaboration" />
    <section className="one">
        <h3>See who wants to create</h3>
        <p>Costless Creatives makes it safe to network without having to address the uncomfortable subject of money. Costless Creatives allows you to post about any kind of projects you're looking to create or be a part of. Whether you're simply new to the field of entertainment and looking to network, if you're looking for people to be a part of a passion project you'd like to create, or if you're simply just looking to create and exchange content for exposure. We're just passionate artists looking to connect! </p>
    </section>
    <section className="two">
        <h3>See something you're interested in?</h3>
        <p>Reply to posts by messaging other creatives via email to privately to connect!</p>
    </section>
    </section>
        )
    }
}

export default Landing;