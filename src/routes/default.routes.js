import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import EventForm from '../components/Forms/EventForm';
import Event from '../pages/Event';
import DescriptionEvent from '../pages/DescriptionEvent';

const DefaultRoutes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/createevent" component={EventForm} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/eventpage" component={DescriptionEvent} />
    </Switch>
  </BrowserRouter>
);

export default DefaultRoutes;
