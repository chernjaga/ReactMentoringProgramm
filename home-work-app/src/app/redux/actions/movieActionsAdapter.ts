import { IApiResponse } from '../../interfaces/IApiResponse';
import { MovieService } from '../../services/MovieService';

export const actionAdapter: any = ({movieId, command, formData}: any): any => (dispatch: any) => {
    MovieService.movieActionRequest({id: movieId, command, formData})
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
