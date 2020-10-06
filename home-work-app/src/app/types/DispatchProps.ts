import { IApiResponse } from "../interfaces/IApiResponse";
import { IQueryParams } from "../interfaces/IQueryParams";

export type DispatchProps = {
    type: 'UPDATE_FINISHED' | 'UPDATE';
    isUpdated?: boolean,
    queryParams?: IQueryParams,
    movies?: IApiResponse.IMovie[]
};