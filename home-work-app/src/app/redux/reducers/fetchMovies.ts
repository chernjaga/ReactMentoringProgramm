import { IApiResponse } from '../../interfaces/IApiResponse';

type FetchState = {
    currentMovies: IApiResponse.IMovie[]
};

type FetchAction = {
    type: string,
    payload: IApiResponse.IMovie[]
};
type Reducer = (
    state: FetchState,
    action: FetchAction
) => FetchState;

const initialFetchState: FetchState = {
    currentMovies: [],
};

export const fetchMovies: Reducer = (state: FetchState = initialFetchState, action: FetchAction) => {
    if (action.type === 'UPDATE') {
        state.currentMovies = action.payload;
    }

    return state;
};