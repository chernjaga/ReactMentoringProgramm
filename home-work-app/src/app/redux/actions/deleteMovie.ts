import { DeleteAction, IMovieActions } from '../../interfaces/IMovieActions';

export const deleteMovieAction: IMovieActions.Remove = (movieId: number): any => {
    return {
        type: "DELETE",
        movieId,
    };
};