import { movieResponse } from '../../../../tempData/getMoviesResponse';
import { FilterPanel } from '../FilterPanel/FilterPanel';
import { MoviesListCatch } from '../ErrorBoundaries/MoviesListCatch.error';
import { MoviesList } from './MoviesList';
import { MoviesListContainer } from './MoviesListContainer.styled';
import { ItemsFound } from './ItemsFound';
import { MoviesListStyled } from './MoviesList.styled';

export const MoviesSection: React.FC = () => (
    <MoviesListStyled>
        <FilterPanel/>
        <ItemsFound amount={movieResponse.data.length}/>
        <MoviesListContainer>
            <MoviesListCatch>
                <MoviesList response = {movieResponse}/>
            </MoviesListCatch>
        </MoviesListContainer>
    </MoviesListStyled>
);