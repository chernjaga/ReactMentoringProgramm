import { forIn } from 'lodash';
import { AppConstants } from '../configs/appConstants';
import { IApiResponse } from '../interfaces/IApiResponse';
import { store } from '../redux/store';

export class MovieService {
    static apiUrl: string = AppConstants.apiConfig.url;

    static getRequestConfig(command?: string, data?: {[key: string]: string | number}): IApiResponse.RequestConfig {
        let method: string;
        switch (command) {
            case 'createMovieItem': method = 'POST';
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
                url = url + `${key}=${value}&`;
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

        store.dispatch({
            type: 'UPDATE',
            payload: response
        });

        return response;
    }
}
