import styled, { StyledComponent }  from 'styled-components';
import { IJSX } from '../types';
import { stylesConfig } from '../configs/style.configs';
import { SortOptions } from './sortOptions.cmpt';

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

const activeColor: string = stylesConfig.colors.pink;

const StyledFilterPanel: StyledComponent<'div', {}> = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid ${stylesConfig.colors.grayTint2};
    margin-bottom: 16px;
`;

const FilterOptions: StyledComponent<'ul', {}> = styled.ul`
    display: flex;
    gap: 8px;
    position: relative;
    justify-content: space-between;
    width: 40%;
`;

const FilterOptionItem: StyledComponent<'li', {}> = styled.li.attrs({
    className: 'filterOptionItem'
})`;
    font-size: 1rem;
    cursor: pointer;
    width: max-content;
    position:relative;
    &:hover {
        color: ${activeColor};
    };
`;

export const FilterPanel: IJSX = () => (
    <StyledFilterPanel>
        <FilterOptions>
            {FilterOptionsConfig.map((item: FilterConfigItem) => (
                <FilterOptionItem key={item.key}>
                    <span></span>
                    {item.title}
                </FilterOptionItem>
            ))}
        </FilterOptions>
        <SortOptions values={['RELEASE', 'TITLE']}/>
    </StyledFilterPanel>
);