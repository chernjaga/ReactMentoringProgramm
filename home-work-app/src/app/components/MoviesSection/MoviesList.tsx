import { MovieCard } from "../MovieCard/MovieCard";
import { IApiResponse } from "../../interfaces/IApiResponse";

type MoviesProps = {
    moviesList: IApiResponse.GetMoviesResponse;
    onMovieDelete: (id: number | string) => any;
};

export const MoviesList: React.FC<MoviesProps> = ({ moviesList, onMovieDelete}) => (
    <>
        {moviesList.data.map((movie: IApiResponse.IMovie) => (
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
