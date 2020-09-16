import { SortOptions } from '../SortOptions/SortOptions';
import { StyledFilterPanel, FilterOptions, FilterOptionItem , SelectedFilterOptionItem} from './FilterPanelStyleSet.styled';
import { FilterItems, FilterConfigItem } from '../../types';
import React, { useCallback, useState } from 'react';

const sortOptions: string[] = [
    'RELEASE',
    'TITLE',
    'GENRE',
    'YEAR'
];


export const FilterPanel: React.FC<{filterItems: FilterItems}> = (props: {filterItems: FilterItems}) => {
    const [sortByParam, setSortByParam] = useState('title');
    const [filterByParam, setFilterByParam] = useState('all');
    const [selectedItemKey, setSelectedItemKey] = useState(1);

    const setFilterValue: (sortValue: string, key: number) => void = (filterValue: string, key: number) => {
        setSelectedItemKey(key);
        setFilterByParam(filterValue);
        changeListHandler(sortByParam, filterByParam);
    };
    const setSortValue: (sortValue: string) => void = (sortValue: string) => {
        setSortByParam(sortValue);
        changeListHandler(sortByParam, filterByParam);
    };

    const changeListHandler: (
        sortBy: string,
        filterBy: string
    ) => void = useCallback((
        sortBy: string,
        filterBy: string
    ): void => {
        // do something
        // console.log(sortBy, filterBy);
    }, [sortByParam, filterByParam]);

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
