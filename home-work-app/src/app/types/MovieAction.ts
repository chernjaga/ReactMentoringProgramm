import { IApiResponse } from '../interfaces/IApiResponse';

export type MovieAction = {
    type: 'UPDATE' |
          'DELETE' |
          'ADD' |
          'EDIT' |
          'UPDATE_FINISHED',
    movies?: IApiResponse.IMovie[],
    movieId?: number,
    queryParams?: any,
    formData?: IApiResponse.IMovie,
    isUpdated?: boolean
};