import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './home/Home.page';
import { Movie } from './movie/Movie.page';
import { MovieList } from '../components/MovieList';

export const Routing: React.FC = () => (
    <Router>
        <Switch>
            <Route exact path="/home" component={HomePage}/>
            <Route path="/movie" component={Movie}/>
            <Redirect to="/home"/>
        </Switch>
        <MovieList/>
    </Router>
);
