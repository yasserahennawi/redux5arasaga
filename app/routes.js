/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import TestHomePage from './containers/TestHomepage';
import LoginPage from './containers/Loginpage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={TestHomePage} />
    </Switch>
  </App>
);
