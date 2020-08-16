import styled, { StyledComponent }  from 'styled-components';
import * as React from 'react';
import { IJSX } from '../types';
import { stylesConfig } from '../configs/style.configs';
import { movieResponse } from '../../../tempData/getMoviesResponse';
import { MovieCard } from './movieCard.cmpt';
import { IApiResponse } from '../interfaces/IApiResponse.interface';
import { FilterPanel } from './filterPanel.cmpt';
import { MoviesListCatch } from './errorBoundaries/moviesListCatch.error';

type MoviesProps = {
    response: IApiResponse.GetMovies
};

const MovieListStyled: StyledComponent<'div', {}> = styled.div`
    background-color: ${stylesConfig.colors.black};
    padding: 32px ${stylesConfig.offsets.sideOffset};
`;

const MovieListContainer: StyledComponent<'ul', {}> = styled.ul`
    padding-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 32px;
`;

const ItemsFound: IJSX = (props: {amount: number}) => (
    <>
        <b>{props.amount}</b> movies found
    </>
);

const Movies: IJSX = (props: MoviesProps) => (
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

export const MovieList: IJSX = () => (
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