import { MovieAction } from '../types';
import { IApiResponse } from './IApiResponse';

export namespace IMovieActions {
    export type Remove = (id: number) => MovieAction;
    export type Add = (formData: IApiResponse.IMovie) => MovieAction;
}