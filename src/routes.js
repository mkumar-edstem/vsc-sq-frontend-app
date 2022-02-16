import React from 'react';
import {
  Route, Switch, Redirect, BrowserRouter
} from 'react-router-dom';
import SecurityQuestionnaire from './pages/SecurityQuestionnaire';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/security-questionnaire/:id" exact component={SecurityQuestionnaire} />
      <Route path="/" exact render={() => <Redirect to="/security-questionnaire/e11e1d26-c912-48d2-9dc7-e5a96b28d852" />} />
    </Switch>
  </BrowserRouter>
);

export default routes;
