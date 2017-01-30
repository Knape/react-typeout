import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Home from './pages/home';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
