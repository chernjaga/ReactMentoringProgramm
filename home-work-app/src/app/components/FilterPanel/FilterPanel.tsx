import { SortOptions } from '../SortOptions/SortOptions';
import { StyledFilterPanel, FilterOptions, FilterOptionItem } from './FilterPanelStyleSet.styled';

type FilterConfigItem = {
    title: string,
    key: number
};

type FilterConfig = FilterConfigItem[];

const FilterOptionsConfig: FilterConfig = [
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

const sortOptions: string[] = [
    'RELEASE',
    'TITLE',
    'GENRE',
    'YEAR'
];

export const FilterPanel: React.FC = () => (
    <StyledFilterPanel>
        <FilterOptions>
            {FilterOptionsConfig.map((item: FilterConfigItem) => (
                <FilterOptionItem key={item.key}>
                    <span></span>
                    {item.title}
                </FilterOptionItem>
            ))}
        </FilterOptions>
        <SortOptions values={sortOptions}/>
    </StyledFilterPanel>
);