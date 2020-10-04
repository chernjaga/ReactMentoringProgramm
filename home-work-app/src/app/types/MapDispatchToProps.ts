import { IMovieActions } from '../interfaces/IMovieActions';

export type MapDispatchToProps = {
    deleteMovie?: IMovieActions.Remove,
    update: IMovieActions.Update,
    setUpdated?: IMovieActions.setStatus
};