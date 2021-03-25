import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const DefaultRoutes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default DefaultRoutes;
