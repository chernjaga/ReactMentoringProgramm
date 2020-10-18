import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FilterPanel } from '../FilterPanel/FilterPanel';
import { MoviesListCatch } from '../ErrorBoundaries/MoviesListCatch/MoviesListCatch.error';
import { MoviesList } from './MoviesList';
import { ItemsFound } from './ItemsFound';
import { MoviesListStyled } from './MoviesList.styled';
import { GlobalState, MapDispatchToProps, MapStateToProps } from '../../types';
import { IApiResponse } from '../../interfaces/IApiResponse';
import { Spinner } from '../Spinner/Spinner';
import { deleteMovieAction } from '../../redux/actions/deleteMovie';
import { AppConstants } from '../../configs/appConstants';
import { updateMovieAction } from '../../redux/actions/updateMovies';

interface MoviesSectionProps extends MapDispatchToProps {
    moviesCollection: IApiResponse.IMovie;
}

const { filterItems } = AppConstants;

const mapStateToProps: MapStateToProps = (
    state: GlobalState
): {
    moviesCollection: IApiResponse.IMovie[];
} => ({
    moviesCollection: state.movieEditor.movies,
});

const mapDispatchToProps: MapDispatchToProps = {
    deleteMovie: deleteMovieAction,
    update: updateMovieAction,
};

const MoviesSectionComponent: React.FC<MoviesSectionProps> = ({
    moviesCollection,
    deleteMovie,
    update,
}: MoviesSectionProps) => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        update();
        setMovies(moviesCollection);
    }, [moviesCollection]);

    return (
        <MoviesListStyled>
            <FilterPanel filterItems={filterItems} />
            {movies ? (
                <>
                    <ItemsFound amount={movies.length} />
                    <MoviesListCatch>
                        <MoviesList moviesList={movies} onMovieDelete={deleteMovie} />
                    </MoviesListCatch>
                </>
            ) : (
                <div>
                    SEARCHING <Spinner size={8} />
                </div>
            )}
        </MoviesListStyled>
    );
};

export const MoviesSection: React.FC<MoviesSectionProps> = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesSectionComponent);

// перенести в moviesList компоненты MoviesListCatch и ItemsFound.
