import { IApiResponse } from '../../interfaces/IApiResponse';
import { MovieAction, MovieActionReducer, MovieState } from '../../types';

const initialState: MovieState = {
    movies: []
};

export const movieEditor: MovieActionReducer = (state: MovieState = initialState, action: MovieAction): MovieState => {
    switch (action.type.toUpperCase()) {
        case 'DELETE':
            return {
                ...state,
                movies: state.movies.filter((movie: IApiResponse.IMovie): boolean => movie.id !== action.movieId),
            };
        case 'UPDATE':
            return {
                ...state,
                movies: action.movies
            };
        default:
            return state;
    }
};