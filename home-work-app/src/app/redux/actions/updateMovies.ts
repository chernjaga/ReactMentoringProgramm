import { IMovieActions } from '../../interfaces/IMovieActions';
import { MovieAction } from '../../types';

export const updateMovieAction: IMovieActions.Update = (): MovieAction => {
    return {
        type: 'UPDATE'
    };
};