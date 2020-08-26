import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './home/home.page';
import React from 'react';
import { IJSX } from '../types';
import { Movie } from './movie/movie.page';
import { MovieList } from '../components/movieList.cmpt';

export const Routing: IJSX = () => (
    <Router>
        <Switch>
            <Route exact path="/home" component={HomePage}/>
            <Route path="/movie" component={Movie}/>
            <Redirect to="/home"/>
        </Switch>
        <MovieList/>
    </Router>
);
