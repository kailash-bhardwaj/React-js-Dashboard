
import Login from './login/Login';
import React from 'react';
import ForgotPassword from './forgotPassword/ForgotPassword';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Auth.scss';
import Dashboard from '../dashboard/Dashboard';
function Auth() {
    ReactDOM.render((
   
  <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/forgot">
            <ForgotPassword />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
     
     ), document.getElementById('root'));

}

export default Auth;

