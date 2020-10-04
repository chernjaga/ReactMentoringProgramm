import { AnyStyledComponent } from 'styled-components';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { MovieService } from '../../services/MovieService';
import { MovieAction } from '../../types';

export const deleteMovieAction: IMovieActions.Remove = (movieId: number): any => (dispatch: any) => {
    MovieService.movieActionRequest(movieId, 'delete')
    .then(() => {
        dispatch({
            type: 'DELETE',
            movieId,
        });
    });
};
