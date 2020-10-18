import { Dispatch } from 'redux';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { MovieService } from '../../services/MovieService';
import { DispatchProps, MovieAction } from '../../types';
import { MovieActionParams } from '../../types/MovieActionParams';
import { store } from '../store';

type ActionAdapter = (params: MovieActionParams) => MovieAction;

export const actionAdapter: ActionAdapter = ({
    movieId,
    command,
    formData,
}: MovieActionParams): MovieAction => (dispatch: Dispatch<DispatchProps>): void => {
    const { queryParams } = store.getState().movieEditor;

    MovieService.movieActionRequest({ id: movieId, command, formData }).then(() => {
        dispatch({
            type: 'UPDATE_FINISHED',
            isUpdated: false,
        });
        MovieService.getMovies(queryParams)
            .then((response: IApiResponse.GetMoviesResponse) => {
                dispatch({
                    type: 'UPDATE',
                    movies: response.data,
                });
            })
            .then(() => {
                dispatch({
                    type: 'UPDATE_FINISHED',
                    isUpdated: true,
                    queryParams,
                });
            });
    });
};
