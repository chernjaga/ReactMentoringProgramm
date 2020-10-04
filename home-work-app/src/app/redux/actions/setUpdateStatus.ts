import { IMovieActions } from '../../interfaces/IMovieActions';

export const setUpdateStatus: IMovieActions.setStatus = (isUpdated: boolean): any => (dispatch: any): void => {
    dispatch({
        type: 'UPDATE_FINISHED',
        isUpdated
    });
};