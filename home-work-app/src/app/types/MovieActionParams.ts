import { IApiResponse } from "../interfaces/IApiResponse";

export type MovieActionParams = {
    command: string;
    movieId?: number;
    formData?: IApiResponse.IMovie;
};
