import { IApiResponse } from '../interfaces/IApiResponse';

export type MovieAction = {
    type: 'UPDATE' | 'DELETE' | 'ADD' | 'EDIT',
    movies?: IApiResponse.IMovie[],
    movieId?: number,
    formData?: IApiResponse.IMovie
};