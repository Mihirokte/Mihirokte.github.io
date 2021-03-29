import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Senpai from './personal';

const routs = (
  <HashRouter >
     <Switch>
        <Route exact path="/"><App /></Route>
        <Route path="/senpaimode"><Senpai /></Route>
     </Switch>
  </ HashRouter >
);

ReactDOM.render(routs, document.getElementById('root'))

