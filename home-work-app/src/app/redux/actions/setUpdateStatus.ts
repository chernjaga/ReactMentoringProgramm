import { Dispatch } from 'react';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { DispatchProps, MovieAction } from '../../types';

export const setUpdateStatus: IMovieActions.setStatus = (
    isUpdated: boolean
): MovieAction => (dispatch: Dispatch<DispatchProps>): void => {
    dispatch({
        type: 'UPDATE_FINISHED',
        isUpdated
    });
};