import { IApiResponse } from '../interfaces/IApiResponse';

export type FormField = {
    label: string;
    movieField: keyof IApiResponse.IMovie;
};
