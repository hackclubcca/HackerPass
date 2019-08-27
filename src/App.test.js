import React from 'react';
import ReactDOM from 'react-dom';
import AppCollection from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppCollection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
