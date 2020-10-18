import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import { MovieCard } from '../MovieCard/MovieCard';
import { IApiResponse } from '../../interfaces/IApiResponse';

type MoviesProps = {
    moviesList: IApiResponse.IMovie[];
    onMovieDelete: (id: number | string) => void;
    className?: string;
};

// tslint:disable-next-line: typedef
export const MoviesListComponent: React.FC<MoviesProps> = ({
    moviesList,
    onMovieDelete,
    className,
}: MoviesProps) => (
    <div className={className}>
        {moviesList.map((movie: IApiResponse.IMovie) => (
            <MovieCard
                onMovieDelete={onMovieDelete}
                coverUrl={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                genres={movie.genres}
                id={movie.id}
                key={movie.id}
            />
        ))}
    </div>
);

export const MoviesList: StyledComponent<React.FC<MoviesProps>, DefaultTheme> = styled(
    MoviesListComponent
)`
    padding-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 32px;
`;
