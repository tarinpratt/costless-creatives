import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom'
import Header from './Header/Header'
import LogInPage from './LogInPage/LogInPage'
import SignUpPage from './SignUpPage/SignUpPage'
import Landing from './Landing/Landing'
import Board from './Board/Board'
import DemoPage from './DemoPage/DemoPage'
import MyProfile from './MyProfile/MyProfile'
import MyPosts from './MyPosts/MyPosts'
import AddProfile from './AddProfile/AddProfile'
import AddPost from './AddPost/AddPost'
import EditProfile from './EditProfile/EditProfile'
import EditPost from './EditPost/EditPost'
import Profile from './Profile/Profile'
import PrivateRoute from './Utils/PrivateRoute'
import PublicRoute from './Utils/PublicRoute'
import './App.css'

class App extends Component {

  render() {
  return (
    <main className='App'>
      <Header />
      <Route exact path='/' component={Landing} />
      <PublicRoute path='/LogInForm' component={LogInPage}/>
      <PublicRoute path='/SignUp' component={SignUpPage}/>
      <PublicRoute path='/Demo' component={DemoPage} />
      <PrivateRoute path='/MyProfile' component={MyProfile} />
      <PrivateRoute path='/MyPosts' component={MyPosts} />
      <PrivateRoute path='/AddProfile' component={AddProfile} />
      <PrivateRoute path='/AddPost' component={AddPost} />
      <PrivateRoute path='/Profile/:userId' component={Profile} />
      <PrivateRoute path='/EditProfile/:profileId' component={EditProfile} />
      <PrivateRoute path='/EditPost/:postId' component={EditPost} />
      <PrivateRoute path='/Board' component={Board}/>
    </main>
    );
  }
}

export default withRouter (App);
