import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDetails } from './MovieDetails';
import { MovieDetailsPoster } from './MovieDetailsPoster.styled';
import { MovieDetailsContent } from './MovieDetailsContent.styled';
import { MovieDetailsHeader } from './MovieDetailsHeader';
import { VoteAverage } from './VoteAverage.styled';
import { MovieDetailsTitle } from './MovieDetailsTitle.styled';
import { MovieDetailsTagline } from './MovieDetailsTagline.styled';
import { MovieDetailsTimeData } from './MovieDetailsTimeData.styled';
import { MovieDetailsOverview } from './MovieDetailsOverview.styled';
import { MovieService } from '../../../../services/MovieService';
import { IApiResponse } from '../../../../interfaces/IApiResponse';

export const Description: React.FC = () => {
    const { id }: { id: string } = useParams();
    const [movie, setMovie] = useState({
        title: '',
        poster_path: '',
        vote_average: '',
        tagline: '',
        release_date: '',
        runtime: '',
        overview: '',
    });
    const getMovieSet: () => void = async () => {
        const movieSet: IApiResponse.IMovie | {} = await MovieService.movieActionRequest({
            id: Number.parseInt(id, 10),
        });
        setMovie({ ...movieSet });
    };

    useEffect(() => {
        getMovieSet();
    }, [id]);

    return (
        <MovieDetails>
            <MovieDetailsPoster src={movie.poster_path} alt={movie.title} />
            <MovieDetailsContent>
                <MovieDetailsHeader>
                    <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
                    <VoteAverage>{movie.vote_average}</VoteAverage>
                </MovieDetailsHeader>
                <MovieDetailsTagline>{movie.tagline}</MovieDetailsTagline>
                <MovieDetailsTimeData>
                    <span>{new Date(movie.release_date).getFullYear().toString()}</span>
                    <span>{movie.runtime}min</span>
                </MovieDetailsTimeData>
                <MovieDetailsOverview>{movie.overview}</MovieDetailsOverview>
            </MovieDetailsContent>
        </MovieDetails>
    );
};
