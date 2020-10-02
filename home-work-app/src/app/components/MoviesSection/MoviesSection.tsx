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
import { connect } from 'react-redux';
import { deleteMovieAction } from '../../redux/actions/deleteMovie'

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

const mapStateToProps: any = (state: any): any => ({
    moviesCollection: state.editMoviesCollection.movies,
});

const mapDispatchToProps: any = {
    deleteMovie: deleteMovieAction
};

const MoviesSectionComponent: React.FC<any> = ({ moviesCollection, deleteMovie }) => {
    const [movies, setMovies] = useState(null);

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
                                <MoviesList moviesList={movies} onMovieDelete={deleteMovie}/>
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

export const MoviesSection: any = connect(mapStateToProps, mapDispatchToProps)(MoviesSectionComponent);

// перенести в moviesList компоненты MoviesListCatch и ItemsFound.