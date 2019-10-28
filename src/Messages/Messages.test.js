import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Messages from './Messages';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Messages /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});