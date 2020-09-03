import { MovieDetails } from './MovieDetails';
import { useParams } from 'react-router-dom';
import { IApiResponse } from '../../../../interfaces/IApiResponse';
import { movieResponse } from '../../../../../../tempData/getMoviesResponse';
import { find } from 'lodash';
import { MovieDetailsPoster } from './MovieDetailsPoster.styled';
import { MovieDetailsContent } from './MovieDetailsContent.styled';

const movieCollection: IApiResponse.IMovie[] = movieResponse.data;

export const Description: React.FC = () => {
    const {id} = useParams();
    const movie: IApiResponse.IMovie = find(movieCollection, {id: Number(id)});
    const {
        title,
        overview,
        tagline,
        poster_path,
        runtime,
        release_date,
        vote_average
    } = movie;

    return (
        <MovieDetails>
            <MovieDetailsPoster src={poster_path} alt={title}/>
            <MovieDetailsContent>
                <h2>
                    {title} ({vote_average})
                </h2>
                <p>
                    {tagline}
                </p>
                <p>
                    {new Date(release_date).getFullYear()} {runtime}min
                </p>
                <p>
                    {overview}
                </p>
            </MovieDetailsContent>
        </MovieDetails>
    );
};
