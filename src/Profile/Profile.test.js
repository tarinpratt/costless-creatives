import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Profile from './Profile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Profile match={{params: {username: 'DanceLyfe'}, isExact: true, path: "", url: ""}}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});