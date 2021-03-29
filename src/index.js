import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Senpai from './personal';

const routs = (
  <BrowserRouter >
     <Switch>
        <Route exact path="/"><App /></Route>
        <Route path="/senpaimode"><Senpai /></Route>
     </Switch>
  </ BrowserRouter >
);

ReactDOM.render(routs, document.getElementById('root'))

