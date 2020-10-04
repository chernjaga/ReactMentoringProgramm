export namespace IApiResponse {
  export interface GetMoviesResponse {
    data: IMovie[];
    limit: number;
    offset: number;
    totalAmount: number;
  }

  export type RequestConfig = {
    method: string,
    headers: {
        'Content-Type': 'application/json'
    },
    body: string
  };

  export type IMovie = {
    budget?: number;
    genres?: string[];
    id?: number;
    overview?: string;
    poster_path?: string;
    release_date?: string;
    revenue?: number;
    runtime?: number;
    tagline?: string;
    title: string;
    vote_average?: number;
    vote_count?: number;
    key?: number;
  };
}
