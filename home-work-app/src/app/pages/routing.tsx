import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './home/home.page';
import * as React from 'react';

export const Routing = (): any => (
    <Router>
        <Switch>
            <Route exact path="/home" component={HomePage}/>
            <Redirect to="/home"/>
        </Switch>
    </Router>
);