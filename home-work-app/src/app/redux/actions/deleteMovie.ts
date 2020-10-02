import { IMovieActions } from '../../interfaces/IMovieActions';
import { MovieAction } from '../../types';

export const deleteMovieAction: IMovieActions.Remove = (movieId: number): MovieAction => {
    return {
        type: 'DELETE',
        movieId,
    };
};