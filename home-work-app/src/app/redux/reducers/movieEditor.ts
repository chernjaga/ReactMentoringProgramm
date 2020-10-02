import { IApiResponse } from '../../interfaces/IApiResponse';
import { MovieAction, MovieActionReducer, MovieState } from '../../types';

export const movieEditor: MovieActionReducer = (state: MovieState, action: MovieAction): MovieState => {
    switch (action.type.toUpperCase()) {
        case 'DELETE':
            return {
                ...state,
                movies: state.movies.filter((movie: IApiResponse.IMovie): boolean => movie.id !== action.movieId),
            };
        case 'UPDATE':
            return {
                movies: action.movies
            };
        default:
            return state;
    }
};