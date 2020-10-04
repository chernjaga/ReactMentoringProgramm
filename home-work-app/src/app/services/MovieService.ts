import { forIn } from 'lodash';
import { AppConstants } from '../configs/appConstants';
import { IApiResponse } from '../interfaces/IApiResponse';

export class MovieService {
    static apiUrl: string = AppConstants.apiConfig.url;

    static getRequestConfig(command?: string, data?: {[key: string]: string | number}): IApiResponse.RequestConfig {
        let method: string;
        switch (command) {
            case 'ADD': method = 'POST';
            case 'DELETE': method = 'DELETE';
            default: method = 'GET';
        }

        return {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
    }

    static getURL(params?: {[key: string]: string | number | string[]}): string {
        let url: string = this.apiUrl;
        if (params && Object.keys(params).length) {
            url = url + '?';
            forIn(params, (value: string | number | string[] , key: string): void => {
                let sortDirection: string = 'desc';
                if (key === 'sortBy' && value === 'title') {
                    sortDirection = 'acs';
                }
                url = url + `${key}=${value}&sortOrder=${sortDirection}&limit=20&`;
            });
        }

        return url;
    }

    static async getMovies(params?: {[key: string]: string | number | string[]}):
    Promise<IApiResponse.GetMoviesResponse> {
        const response: IApiResponse.GetMoviesResponse = await fetch(
            this.getURL(params),
            this.getRequestConfig()
        )
        .then((fetchedData: Response): Promise<IApiResponse.GetMoviesResponse> => fetchedData.json());

        return response;
    }

    static async movieActionRequest(id: number, command?: string): Promise<IApiResponse.IMovie> {
        const response: IApiResponse.IMovie = await fetch(
            `${this.apiUrl}/${id}`,
            this.getRequestConfig(command)
        ).then((fetchedData: Response): Promise<IApiResponse.IMovie> => fetchedData.json());

        return response;
    }
}
