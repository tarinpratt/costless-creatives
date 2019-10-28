import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import EditProfile from './EditProfile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><EditProfile match={{params: {username: 'DanceLyfe'}, isExact: true, path: "", url: ""}} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});