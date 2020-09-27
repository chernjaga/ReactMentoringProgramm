type FetchState = {
    isRefreshed: boolean
};

type Reducer = (
    state: FetchState
) => FetchState;

export const initialFetchState: FetchState = {
    isRefreshed: false
};

export const fetchMovies: Reducer = (state: FetchState = initialFetchState) => {

    return state;
};