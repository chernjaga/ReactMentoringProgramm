import { movieResponse } from '../../../../tempData/getMoviesResponse';
import { FilterPanel } from '../FilterPanel/FilterPanel';
import { MoviesListCatch } from '../ErrorBoundaries/MoviesListCatch/MoviesListCatch.error';
import { MoviesList } from './MoviesList';
import { MoviesListContainer } from './MoviesListContainer.styled';
import { ItemsFound } from './ItemsFound';
import { MoviesListStyled } from './MoviesList.styled';
import { FilterItems } from '../../types';

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

export const MoviesSection: React.FC = () => (
    <MoviesListStyled>
        <FilterPanel filterItems={filterItems}/>
        <ItemsFound amount={movieResponse.data.length}/>
        <MoviesListContainer>
            <MoviesListCatch>
                <MoviesList response = {movieResponse}/>
            </MoviesListCatch>
        </MoviesListContainer>
    </MoviesListStyled>
);