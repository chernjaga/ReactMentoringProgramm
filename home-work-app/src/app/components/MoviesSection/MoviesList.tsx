import { MovieCard } from "../MovieCard/MovieCard";
import { IApiResponse } from "../../interfaces/IApiResponse";

type MoviesProps = {
    moviesList: IApiResponse.IMovie[];
    onMovieDelete: (id: number | string) => void;
};

// tslint:disable-next-line: typedef
export const MoviesList: React.FC<MoviesProps> = ({ moviesList, onMovieDelete}) => (
    <>
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
    </>
);
