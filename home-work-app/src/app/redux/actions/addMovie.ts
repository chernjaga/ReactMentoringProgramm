import { IApiResponse } from '../../interfaces/IApiResponse';
import { AddAction, IMovieActions } from '../../interfaces/IMovieActions';

export const deleteMovie: IMovieActions.Add = (formData: IApiResponse.IMovie): AddAction => {
    return {
        type: 'ADD_ITEM',
        payload: formData
    };
};