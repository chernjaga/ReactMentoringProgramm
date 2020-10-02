import { FilterPanel } from '../FilterPanel/FilterPanel';
import { MoviesListCatch } from '../ErrorBoundaries/MoviesListCatch/MoviesListCatch.error';
import { MoviesList } from './MoviesList';
import { MoviesListContainer } from './MoviesListContainer.styled';
import { ItemsFound } from './ItemsFound';
import { MoviesListStyled } from './MoviesList.styled';
import { FilterItems, GlobalState, MapDispatchToProps, MapStateToProps, MovieState } from '../../types';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { connect } from 'react-redux';
import { deleteMovieAction } from '../../redux/actions/deleteMovie';
import { AppConstants } from '../../configs/appConstants';
import { IMovieActions } from '../../interfaces/IMovieActions';
import { updateMovieAction } from '../../redux/actions/updateMovies';

type MoviesSectionProps = {
    moviesCollection: IApiResponse.IMovie,
    deleteMovie: IMovieActions.Remove,
    update: IMovieActions.Update
};

const filterItems: FilterItems = AppConstants.filterItems;

const mapStateToProps: MapStateToProps = (state: GlobalState): {moviesCollection: IApiResponse.IMovie[]} => ({
    moviesCollection: state.movieEditor.movies,
});

const mapDispatchToProps: MapDispatchToProps = {
    deleteMovie: deleteMovieAction,
    update: updateMovieAction,
};

// tslint:disable-next-line: typedef
const MoviesSectionComponent: React.FC<MoviesSectionProps> = ({ moviesCollection, deleteMovie, update }) => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        update();
        setMovies(moviesCollection);
    }, []);

    return (
        <MoviesListStyled>
            <FilterPanel filterItems={filterItems} />
            {
                movies  ?
                (
                    <>
                        <ItemsFound amount={movies.length} />
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

export const MoviesSection: React.FC<MoviesSectionProps> =
    connect(mapStateToProps, mapDispatchToProps)(MoviesSectionComponent);

// перенести в moviesList компоненты MoviesListCatch и ItemsFound.