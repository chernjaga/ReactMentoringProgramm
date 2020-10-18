import { IApiResponse } from '../../interfaces/IApiResponse';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { actionAdapter } from './movieActionsAdapter';

export const addMovie: IMovieActions.Add = (formData: IApiResponse.IMovie) => actionAdapter({
    command: 'ADD',
    formData
});
