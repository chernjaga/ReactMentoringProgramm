import { IApiResponse } from '../../interfaces/IApiResponse';
import { MovieAction, MovieActionReducer, MovieState } from '../../types';

const initialState: MovieState = {
    movies: [],
    isUpdated: false
};

export const movieEditor: MovieActionReducer = (state: MovieState = initialState, action: MovieAction): MovieState => {
    switch (action.type.toUpperCase()) {
        case 'UPDATE':
            return {
                ...state,
                movies: action.movies
            };
        case 'UPDATE_FINISHED':
            return {
                ...state,
                isUpdated: action.isUpdated
            };
        default:
            return state;
    }
};