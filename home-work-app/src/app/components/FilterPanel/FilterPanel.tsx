import { SortOptions } from '../SortOptions/SortOptions';
import { StyledFilterPanel, FilterOptions, FilterOptionItem } from './FilterPanelStyleSet.styled';
import { FilterItems, FilterConfigItem } from '../../types';
import { useCallback, useState } from 'react';

const sortOptions: string[] = [
    'RELEASE',
    'TITLE',
    'GENRE',
    'YEAR'
];

type FilterParams = {
    sortBy: string,
    filterBy: string
};

const initFilterParams: FilterParams = {
    sortBy: 'release',
    filterBy: 'all'
};

export const FilterPanel: React.FC<{filterItems: FilterItems}> = (props: {filterItems: FilterItems}) => {

    const [stateParams, setStateParams] = useState(initFilterParams);

    const getNewParams: (type: keyof FilterParams, value: string) => FilterParams = (
        type: keyof FilterParams,
        value: string
    ) => {
        const outputParams: FilterParams = stateParams;
        outputParams[type] = value;

        return outputParams;
    };

    const setFilterValue: (sortValue: string) => void = (filterValue: string) => {
        setStateParams(getNewParams('filterBy', filterValue));
        changeListHandler(stateParams);
    };
    const setSortValue: (sortValue: string) => void = (sortValue: string) => {
        setStateParams(getNewParams('sortBy', sortValue));
        changeListHandler(stateParams);
    };

    const changeListHandler: (params: FilterParams) => void = useCallback((params: FilterParams): void => {
        // do something
        // console.log(params);
    }, [stateParams]);

    return (
        <StyledFilterPanel>
            <FilterOptions>
                {props.filterItems.map((item: FilterConfigItem) => (
                    <FilterOptionItem key={item.key} onClick={setFilterValue.bind(this, item.label)}>
                            {item.title}
                    </FilterOptionItem>
                ))}
            </FilterOptions>
            <SortOptions onValueChange={setSortValue.bind(this)} values={sortOptions}/>
        </StyledFilterPanel>
    );
};
