// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Main from './components/main';
import About from './components/about';

// Routes definition
export default (
  <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/about" component={About} />
  </Route>
);
