import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name ="Welcome to React" />
  </React.StrictMode>,
  document.getElementById('root')
);

