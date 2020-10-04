import { IApiResponse } from '../../interfaces/IApiResponse';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { MovieService } from '../../services/MovieService';
import { store } from '../store';

type RequestParams = {
    sortBy: string,
    filter?: string[]
};

export const updateMovieAction: IMovieActions.Update = (queryParams?: RequestParams): any => (dispatch: any) => {
    const isUpdated: boolean = store.getState().movieEditor.isUpdated;
    if (!isUpdated) {
        MovieService.getMovies(queryParams)
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
    }
};
