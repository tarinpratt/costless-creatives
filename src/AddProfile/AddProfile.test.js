import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AddProfile from './AddProfile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AddProfile /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});