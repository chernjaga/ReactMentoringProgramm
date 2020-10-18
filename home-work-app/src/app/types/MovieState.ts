import { IApiResponse } from '../interfaces/IApiResponse';
import { IQueryParams } from '../interfaces/IQueryParams';

export type MovieState = {
    movies: IApiResponse.IMovie[];
    isUpdated: boolean;
    errorMessage: string[];
    queryParams: IQueryParams;
};
