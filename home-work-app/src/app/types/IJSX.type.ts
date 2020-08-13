import { IApiResponse } from '../interfaces/IApiResponse.interface.d'

export type IJSX = (props: {[key: string]: string | number | string[] | IApiResponse.GetMovies}) => JSX.Element;
