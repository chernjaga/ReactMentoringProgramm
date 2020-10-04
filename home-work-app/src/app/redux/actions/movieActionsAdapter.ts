import { IApiResponse } from '../../interfaces/IApiResponse';
import { MovieService } from '../../services/MovieService';
import { store } from '../store';

export const actionAdapter: any = ({movieId, command, formData}: any): any => (dispatch: any) => {
    const queryParams: any = store.getState().movieEditor.queryParams;

    MovieService.movieActionRequest({id: movieId, command, formData})
    .then(() => {
        dispatch({
            type: 'UPDATE_FINISHED',
            isUpdated: false
        });
        MovieService.getMovies(queryParams)
        .then((response: IApiResponse.GetMoviesResponse) => {
            dispatch({
                type: 'UPDATE',
                movies: response.data
            });
        }).then(() => {
           dispatch({
                type: 'UPDATE_FINISHED',
                isUpdated: true,
                queryParams
           });
        });
    });
};
