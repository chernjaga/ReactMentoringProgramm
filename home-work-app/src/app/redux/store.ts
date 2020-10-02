import { combineReducers, createStore, Store } from 'redux';
import { fetchMovies } from './reducers/fetchMovies';
import { movieEditor } from './reducers/movieEditor';

// export const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
export const store: Store = createStore(combineReducers({
    fetch: fetchMovies,
    editMoviesCollection: movieEditor
}));