import { SortOptions } from '../SortOptions/SortOptions';
import { StyledFilterPanel, FilterOptions, FilterOptionItem } from './FilterPanelStyleSet.styled';
import { FilterItems, FilterConfigItem } from '../../types';

const sortOptions: string[] = [
    'RELEASE',
    'TITLE',
    'GENRE',
    'YEAR'
];

export const FilterPanel: React.FC<{filterItems: FilterItems}> = (props: {filterItems: FilterItems}) => (
    <StyledFilterPanel>
        <FilterOptions>
            {props.filterItems.map((item: FilterConfigItem) => (
                <FilterOptionItem key={item.key}>
                    {item.title}
                </FilterOptionItem>
            ))}
        </FilterOptions>
        <SortOptions values={sortOptions}/>
    </StyledFilterPanel>
);