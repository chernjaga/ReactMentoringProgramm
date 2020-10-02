import { IApiResponse } from '../../interfaces/IApiResponse';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { MovieAction } from '../../types';

export const add: IMovieActions.Add = (formData: IApiResponse.IMovie): MovieAction => {
    return {
        type: 'ADD',
        formData
    };
};