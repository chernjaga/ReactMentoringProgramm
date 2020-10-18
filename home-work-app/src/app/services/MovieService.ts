import { forIn } from 'lodash';
import { AppConstants } from '../configs/appConstants';
import { IApiResponse } from '../interfaces/IApiResponse';
import { IQueryParams } from '../interfaces/IQueryParams';

type MovieActionRequestParams = {
    id?: number;
    command?: string;
    formData?: IApiResponse.IMovie;
};

type EmptyDescription = {
    [key: string]: undefined;
};

export class MovieService {
    static apiUrl: string = AppConstants.apiConfig.url;

    static getRequestConfig(
        command?: string,
        data?: IApiResponse.IMovie
    ): IApiResponse.RequestConfig {
        let method: string;
        switch (command) {
            case 'ADD':
                method = 'POST';
                break;
            case 'DELETE':
                method = 'DELETE';
                break;
            case 'EDIT':
                method = 'PUT';
                break;
            default:
                method = 'GET';
        }

        return {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
    }

    static getURL(params?: IQueryParams): string {
        let url: string = this.apiUrl;
        if (params && Object.keys(params).length) {
            url += '?';
            forIn(params, (value: string | number | string[], key: string): void => {
                let sortDirection: string = 'desc';
                if (key === 'sortBy' && value === 'title') {
                    sortDirection = 'acs';
                }
                url += `${key}=${value}&sortOrder=${sortDirection}&limit=20&`;
            });
        }

        return url;
    }

    static async getMovies(params?: IQueryParams): Promise<IApiResponse.GetMoviesResponse> {
        const response: IApiResponse.GetMoviesResponse = await fetch(
            this.getURL(params),
            this.getRequestConfig()
        ).then(
            (fetchedData: Response): Promise<IApiResponse.GetMoviesResponse> => fetchedData.json()
        );

        return response;
    }

    static async movieActionRequest({
        id,
        command,
        formData,
    }: MovieActionRequestParams): Promise<IApiResponse.IMovie | {}> {
        let response: unknown;
        switch (command) {
            case 'DELETE':
                response = await fetch(
                    `${this.apiUrl}/${id || ''}`,
                    this.getRequestConfig(command, formData)
                );
                break;
            default:
                response = await fetch(
                    `${this.apiUrl}/${id || ''}`,
                    this.getRequestConfig(command, formData)
                ).then((fetchedData: Response): Promise<IApiResponse.IMovie> => fetchedData.json());
        }

        return response;
    }
}
