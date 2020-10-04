export type EditMenuProps = {
    movieId?: number,
    onMovieDelete?: (movieId: number) => void,
    onClose: (event: React.MouseEvent) => void
};
