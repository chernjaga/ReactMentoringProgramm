import { IApiResponse } from '../interfaces/IApiResponse.interface'

export type IJSX = (props: {[key: string]: string | number | string[] | IApiResponse.GetMovies}) => JSX.Element;
