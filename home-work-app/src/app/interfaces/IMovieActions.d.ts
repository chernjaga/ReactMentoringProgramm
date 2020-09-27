export type DeleteAction = {
    type: string,
    payload: {
        movieId: number;
    }
};

export namespace IMovieActions {
    export type Remove = (id: number) => DeleteAction;
}