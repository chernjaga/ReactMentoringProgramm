import { IApiResponse } from '../../interfaces/IApiResponse';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { MovieService } from '../../services/MovieService';

export const deleteMovieAction: IMovieActions.Remove = (movieId: number): any => (dispatch: any) => {
    MovieService.movieActionRequest({id: movieId, command:'DELETE'})
    .then(() => {
        dispatch({
            type: 'UPDATE_FINISHED',
            isUpdated: false
        });
        MovieService.getMovies()
        .then((response: IApiResponse.GetMoviesResponse) => {
            dispatch({
                type: 'UPDATE',
                movies: response.data
            });
        }).then(() => {
           dispatch({
                type: 'UPDATE_FINISHED',
                isUpdated: true
           });
        });
    });
};
