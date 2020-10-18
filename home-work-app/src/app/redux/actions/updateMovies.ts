
import { Dispatch } from 'redux';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { IQueryParams } from '../../interfaces/IQueryParams';
import { MovieService } from '../../services/MovieService';
import { DispatchProps, MovieAction } from '../../types';
import { store } from '../store';

export const updateMovieAction: IMovieActions.Update = (queryParams?: IQueryParams): MovieAction =>
    (dispatch: Dispatch<DispatchProps>) =>
{
    if (!store.getState().movieEditor.isUpdated) {
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
    }
};
