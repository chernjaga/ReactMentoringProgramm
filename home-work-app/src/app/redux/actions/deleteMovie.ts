import { IMovieActions } from '../../interfaces/IMovieActions';
import { actionAdapter } from './movieActionsAdapter';

export const deleteMovieAction: IMovieActions.Remove = (movieId: number) => actionAdapter({
    command: 'DELETE',
    movieId
});