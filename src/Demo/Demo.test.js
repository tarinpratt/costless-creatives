import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Demo from './Demo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Demo /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});