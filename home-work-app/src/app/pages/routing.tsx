import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './home/home.page';
import * as React from 'react';
import { IRouting } from '../types/index';

export const Routing: IRouting = () => (
    <Router>
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Redirect to="/home"/>
        </Switch>
    </Router>
);
