import { IMovieActions } from '../../interfaces/IMovieActions';
import { MovieService } from '../../services/MovieService';

export const deleteMovieAction: IMovieActions.Remove = (movieId: number): any => (dispatch: any) => {
    MovieService.movieActionRequest(movieId, 'DELETE')
    .then(() => {
        dispatch({
            type: 'DELETE',
            movieId,
        });
    });
};
