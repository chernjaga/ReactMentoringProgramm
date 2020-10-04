import { IMovieActions } from '../interfaces/IMovieActions';

export interface MapDispatchToProps {
    deleteMovie?: IMovieActions.Remove;
    update?: IMovieActions.Update;
    setUpdated?: IMovieActions.setStatus;
    add?: IMovieActions.Add;
}