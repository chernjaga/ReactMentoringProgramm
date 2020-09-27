import { SortOptions } from '../SortOptions/SortOptions';
import { StyledFilterPanel, FilterOptions, FilterOptionItem , SelectedFilterOptionItem} from './FilterPanelStyleSet.styled';
import { FilterItems, FilterConfigItem } from '../../types';
import React, { useCallback, useState } from 'react';
import { MovieService } from '../../services/MovieService';

const sortOptions: string[] = [
    'RELEASE',
    'TITLE',
    'RATING'
];

const sortMap: {
    [key: string]: string
} = {
    release: 'release_date',
    title: 'title',
    rating: 'vote_average'
};

type RequestParams = {
    sortBy: string,
    filter?: string[]
};

export const FilterPanel: React.FC<{filterItems: FilterItems}> = (props: {filterItems: FilterItems}) => {
    const [sortByParam, setSortByParam] = useState('title');
    const [filterByParam, setFilterByParam] = useState('all');
    const [selectedItemKey, setSelectedItemKey] = useState(1);

    const setFilterValue: (
        filterValue: string,
        key: number,
        event: React.MouseEvent
    ) => void = (
        filterValue: string,
        key: number,
        event: React.MouseEvent
    ) => {
        event.stopPropagation();
        event.preventDefault();
        setSelectedItemKey(key);
        changeListHandler(sortByParam, filterValue);
        setFilterByParam(filterValue);
    };
    const setSortValue: (sortValue: string) => void = (sortValue: string) => {
        changeListHandler(sortValue, filterByParam);
        setSortByParam(sortValue);
    };

    const changeListHandler: (
        sortBy: string,
        filterBy: string
    ) => void = useCallback((
        sortBy: string,
        filterBy: string
    ): void => {
        const requestParams: RequestParams = {
            sortBy: sortMap[sortBy.toLowerCase()]
        };
        if (filterBy !== 'all') {
            requestParams.filter = [filterBy];
        }
        MovieService.getMovies(requestParams);

    }, []);

    return (
        <StyledFilterPanel>
            <FilterOptions>
                {
                    props.filterItems.map((item: FilterConfigItem) => {
                        if (item.key === selectedItemKey) {
                            return (
                                <SelectedFilterOptionItem key={item.key}
                                                          onClick={setFilterValue.bind(this, item.label, item.key)}>
                                    {item.title}
                                </SelectedFilterOptionItem>
                            );
                        }

                        return (
                            <FilterOptionItem key={item.key} onClick={setFilterValue.bind(this, item.label, item.key)}>
                                    {item.title}
                            </FilterOptionItem>
                        );
                    })
                }
            </FilterOptions>
            <SortOptions onValueChange={setSortValue.bind(this)} values={sortOptions}/>
        </StyledFilterPanel>
    );
};
