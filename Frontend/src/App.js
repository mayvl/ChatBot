import React, { Component } from 'react';
import './global.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Login from '../src/pages/login/login';
import Signup from '../src/pages/signup/signup';
import Home from '../src/pages/home/home';
import Chat from '../src/pages/chat/chat';

export default class App extends Component {
   render() {
      return (
         <div>
            <BrowserRouter>
               <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/home" component={Home} />
                  <Route path="/chat" component={Chat} />
               </Switch>
            </BrowserRouter>
         </div>
      );
   }
}
