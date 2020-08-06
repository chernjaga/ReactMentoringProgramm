import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './home/home.page';
import * as React from 'react';
import { IJSX } from '../types/index';

export const Routing: IJSX = () => (
    <Router>
        <Switch>
            <Route exact path="/home" component={HomePage}/>
            <Redirect to="/home"/>
        </Switch>
    </Router>
);
