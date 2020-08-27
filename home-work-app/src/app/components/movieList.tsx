import styled, { StyledComponent }  from 'styled-components';

import { stylesConfig } from '../configs/style.configs';
import { movieResponse } from '../../../tempData/getMoviesResponse';
import { MovieCard } from './MovieCard';
import { IApiResponse } from '../interfaces/IApiResponse';
import { FilterPanel } from './FilterPanel';
import { MoviesListCatch } from './errorBoundaries/MoviesListCatch.error';

type MoviesProps = {
    response: IApiResponse.GetMovies
};

const MovieListStyled: StyledComponent<'section', {}> = styled.section`
    background-color: ${stylesConfig.colors.black};
    padding: 32px ${stylesConfig.offsets.sideOffset};
`;

const MovieListContainer: StyledComponent<'ul', {}> = styled.ul`
    padding-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 32px;
`;

const ItemsFound: React.FC<{amount: number}> = (props: {amount: number}) => (
    <>
        <b>{props.amount}</b> movies found
    </>
);

const Movies: React.FC<MoviesProps> = (props: MoviesProps) => (
    <>
        {props.response.data.map(
            (movie: IApiResponse.IMovie) => (
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

export const MovieList: React.FC = () => (
    <MovieListStyled>
        <FilterPanel/>
        <ItemsFound amount={movieResponse.data.length}/>
        <MovieListContainer>
            <MoviesListCatch>
                <Movies response = {movieResponse}/>
            </MoviesListCatch>
        </MovieListContainer>
    </MovieListStyled>
);