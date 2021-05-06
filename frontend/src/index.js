import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router} from 'react-router';
import Routes from './Routes.js';

ReactDOM.render(
  <Router routes={Routes}></Router>,
  document.getElementById('root')
);

