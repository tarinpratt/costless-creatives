import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MyProfile from './MyProfile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MyProfile /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});