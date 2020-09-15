// import { movieResponse } from '../../../../tempData/GetMoviesResponse';
import { FilterPanel } from '../FilterPanel/FilterPanel';
import { MoviesListCatch } from '../ErrorBoundaries/MoviesListCatch/MoviesListCatch.error';
import { MoviesList } from './MoviesList';
import { MoviesListContainer } from './MoviesListContainer.styled';
import { ItemsFound } from './ItemsFound';
import { MoviesListStyled } from './MoviesList.styled';
import { FilterItems } from '../../types';
import { MovieService } from '../../services/MovieService';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { useEffect, useState } from 'react';

const filterItems: FilterItems = [
    {
        title: 'ALL',
        key: 1
    },
    {
        title: 'DOCUMENTARY',
        key: 2
    },
    {
        title: 'COMEDY',
        key: 3
    },
    {
        title: 'HORROR',
        key: 4
    },
    {
        title: 'CRIME',
        key: 5
    }
];

export const MoviesSection: React.FC = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        MovieService.getMovies()
            .then((collection: IApiResponse.GetMoviesResponse) => setMovies(collection));
    }, [movies]); // search will be updated

    return (
        <MoviesListStyled>
            <FilterPanel filterItems={filterItems} />
                {
                    movies ?
                    (
                        <>
                            <ItemsFound amount={movies.data.length} />
                            <MoviesListContainer>
                                <MoviesListCatch>
                                    <MoviesList response={movies} />
                                </MoviesListCatch>
                            </MoviesListContainer>
                        </>
                    ) :
                    (
                        <div>Searching ...</div>
                    )
                }
        </MoviesListStyled>
    );
};