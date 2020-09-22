import { IApiResponse } from '../interfaces/IApiResponse';
import { movieResponse } from '../../../tempData/GetMoviesResponse';

export class MovieService {
    static async getMovies(): Promise<IApiResponse.GetMoviesResponse> {
        const response: IApiResponse.GetMoviesResponse = await new Promise(
            (resolve: (collection: IApiResponse.GetMoviesResponse) => void): void =>
        {
            setTimeout(() => {
                resolve(movieResponse);
            }, 4000);
        });

        return response;
    }
}
