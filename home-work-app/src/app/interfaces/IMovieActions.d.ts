import { MovieAction } from '../types';
import { IApiResponse } from './IApiResponse';

type RequestParams = {
    sortBy: string,
    filter?: string[]
};

export namespace IMovieActions {
    export type Remove = (id: number) => MovieAction;
    export type Add = (formData: IApiResponse.IMovie) => MovieAction;
    export type Update = (queryParams?: RequestParams) => MovieAction;
    export type setStatus = (isUpdated: boolean) => MovieAction;
}