import { MovieCard } from '../MovieCard/MovieCard';
import { IApiResponse } from '../../interfaces/IApiResponse';

type MoviesProps = {
    response: IApiResponse.GetMoviesResponse
};

export const MoviesList: React.FC<MoviesProps> = ( props: MoviesProps ) => (
    <>
        {props.response.data.map(
            ( movie: IApiResponse.IMovie ) => (
                <MovieCard
                    coverUrl={movie.poster_path}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    genres={movie.genres}
                    id={movie.id}
                    key={movie.id}
                />
            )
        )}
    </>
);