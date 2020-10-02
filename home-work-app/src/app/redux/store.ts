import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { movieEditor } from './reducers/movieEditor';

// export const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
export const store: Store = createStore(combineReducers({
    movieEditor
}), applyMiddleware(thunk));