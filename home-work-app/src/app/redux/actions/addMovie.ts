import { IApiResponse } from '../../interfaces/IApiResponse';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { MovieService } from '../../services/MovieService';

export const addMovie: IMovieActions.Add = (formData: IApiResponse.IMovie): any => (dispatch: any) => {
    MovieService.movieActionRequest({command: 'ADD' , formData })
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
