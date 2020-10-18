import { IApiResponse } from '../../interfaces/IApiResponse';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { actionAdapter } from './movieActionsAdapter';

export const editMovie: IMovieActions.Add = (formData: IApiResponse.IMovie) =>
    actionAdapter({
        command: 'EDIT',
        formData,
    });
