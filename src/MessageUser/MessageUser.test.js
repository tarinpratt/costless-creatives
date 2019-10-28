import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MessageUser from './MessageUser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><MessageUser match={{params: {username: 'DanceLyfe'}, isExact: true, path: "", url: ""}}/></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});