import { IApiResponse } from './IApiResponse';

export type DeleteAction = {
    type: string,
    payload: {
        movieId: number;
    }
};

export type AddAction = {
    type: string,
    payload: IApiResponse.IMovie
};

export namespace IMovieActions {
    export type Remove = (id: number) => DeleteAction;
    export type Add = (formData: IApiResponse.IMovie) => AddAction;
}