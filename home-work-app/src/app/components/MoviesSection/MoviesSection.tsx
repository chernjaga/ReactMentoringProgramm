import { FilterPanel } from '../FilterPanel/FilterPanel';
import { MoviesListCatch } from '../ErrorBoundaries/MoviesListCatch/MoviesListCatch.error';
import { MoviesList } from './MoviesList';
import { MoviesListContainer } from './MoviesListContainer.styled';
import { ItemsFound } from './ItemsFound';
import { MoviesListStyled } from './MoviesList.styled';
import { FilterItems, IAppConstants } from '../../types';
import { MovieService } from '../../services/MovieService';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { store } from '../../redux/store';
import { remove } from 'lodash';

type DeleteHandler = (
    collection: IApiResponse.GetMoviesResponse,
    id: string
) => IApiResponse.GetMoviesResponse;

const filterItems: FilterItems = [
    {
        title: 'ALL',
        key: 1,
        label: 'all'
    },
    {
        title: 'DOCUMENTARY',
        key: 2,
        label: 'documentary'
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

const getMoviesWithoutRemoved: DeleteHandler = (collection: IApiResponse.GetMoviesResponse, id: string) => {
    // tslint:disable-next-line: no-any
    const currentCollection: any =
        remove(collection.data, (item: IApiResponse.IMovie) => item.id.toString() === id);

    return currentCollection;
};

export const MoviesSection: React.FC = () => {
    const [movies, setMovies] = useState(null);

    store.subscribe(() => {
        const currentAction: string = store.getState().edit.currentAction;

        switch (currentAction) {
            case 'delete': setMovies(getMoviesWithoutRemoved(
                    store.getState().fetch.currentMovies,
                    store.getState().edit.movieId
                )
            );
            case 'add': console.log('add');
            default: setMovies(store.getState().fetch.currentMovies);
        }
    });

    return (
        <MoviesListStyled>
            <FilterPanel filterItems={filterItems} />
            {
                movies && movies.data ?
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