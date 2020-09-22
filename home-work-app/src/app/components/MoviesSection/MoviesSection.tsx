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
import { Spinner } from '../Spinner/Spinner';

const filterItems: FilterItems = [
    {
        title: 'ALL',
        key: 1,
        label: 'all'
    },
    {
        title: 'DOCUMENTARY',
        key: 2,
        label: 'doc'
    },
    {
        title: 'COMEDY',
        key: 3,
        label: 'comedy'
    },
    {
        title: 'HORROR',
        key: 4,
        label: 'horror'
    },
    {
        title: 'CRIME',
        key: 5,
        label: 'crime'
    }
];

export const MoviesSection: React.FC = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        MovieService.getMovies({limit: 20})
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
                    <div>
                        SEARCHING <Spinner size={8}/>
                    </div>
                )
            }
        </MoviesListStyled>
    );
};