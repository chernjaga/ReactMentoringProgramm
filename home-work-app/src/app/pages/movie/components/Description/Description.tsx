import { MovieDetails } from './MovieDetails';
import { useParams } from 'react-router-dom';
import { IApiResponse } from '../../../../interfaces/IApiResponse';
import { movieResponse } from '../../../../../../tempData/GetMoviesResponse';
import { find } from 'lodash';
import { MovieDetailsPoster } from './MovieDetailsPoster.styled';
import { MovieDetailsContent } from './MovieDetailsContent.styled';
import { MovieDetailsHeader } from './MovieDetailsHeader';
import { VoteAverage } from './VoteAverage.styled';
import { MovieDetailsTitle } from './MovieDetailsTitle.styled';
import { MovieDetailsTagline } from './MovieDetailsTagline.styled';
import { MovieDetailsTimeData } from './MovieDetailsTimeData.styled';
import { MovieDetailsOverview } from './MovieDetailsOverview.styled';

const movieCollection: IApiResponse.IMovie[] = movieResponse.data;

export const Description: React.FC = () =>
{
    const { id }: {id: string} = useParams();
    const movie: IApiResponse.IMovie = find( movieCollection, { id: Number( id ) } );
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
            <MovieDetailsPoster src={poster_path} alt={title} />
            <MovieDetailsContent>
                <MovieDetailsHeader>
                    <MovieDetailsTitle>
                        {title}
                    </MovieDetailsTitle>
                    <VoteAverage>
                        {vote_average}
                    </VoteAverage>
                </MovieDetailsHeader>
                <MovieDetailsTagline>
                    {tagline}
                </MovieDetailsTagline>
                <MovieDetailsTimeData>
                    <span>
                        {new Date( release_date ).getFullYear()}
                    </span>
                    <span>
                        {runtime}min
                    </span>
                </MovieDetailsTimeData>
                <MovieDetailsOverview>
                    {overview}
                </MovieDetailsOverview>
            </MovieDetailsContent>
        </MovieDetails>
    );
};
