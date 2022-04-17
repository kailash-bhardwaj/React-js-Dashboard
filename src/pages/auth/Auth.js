import Login from './login/Login';
import React from 'react';
import ForgotPassword from './forgotPassword/ForgotPassword';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

function Auth() {
    ReactDOM.render(( <
        div ClassName = "test" >
        <
        BrowserRouter >
        <
        Switch >
        <
        Route exact path = "/" >
        <
        Login / >
        <
        /Route> <
        Route path = "/forgot" >
        <
        ForgotPassword / >
        <
        /Route>

        <
        /Switch> <
        /BrowserRouter> <
        p > test < /p> <
        /div>



    ), document.getElementById('root'));

}

export default Auth;