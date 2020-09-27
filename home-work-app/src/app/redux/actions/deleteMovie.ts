import { DeleteAction, IMovieActions } from '../../interfaces/IMovieActions';

export const deleteMovie: IMovieActions.Remove = (id: number): DeleteAction => {
    return {
        type: 'DELETE',
        payload: {
            movieId: id
        }
    };
};