import styled, { StyledComponent }  from 'styled-components';
import * as React from 'react';
import { IJSX } from '../types';
import { stylesConfig } from '../configs/style.configs';

type StyledProps = string[];


const Select: StyledComponent<'select', {}> = styled.select.attrs({
    name: 'sortOptions',
    id: 'sortOptions'
})`
    background-color: ${stylesConfig.colors.black};
    border-radius: 4px;
    text-decoration: none;
    font-size: 1rem;
    margin-left: 8px;
`;

const Option: StyledComponent<'option', {}> = styled.option`
    background-color: ${stylesConfig.colors.black};
    border-radius: none;
    font-size: 1rem;
    
    &:hover {
        background-color: ${stylesConfig.colors.pink};
    }
`;

const StyledSortOptions: StyledComponent<'div', {}> = styled.div`
    color: ${stylesConfig.colors.grayTint3};
`;

export const SortOptions: IJSX = (props: {values: StyledProps}) => (
    <StyledSortOptions>
        Sort By 
        <Select>
            {props.values.map((value: string) => (
                <Option value={value} key={value}>
                    {value}
                </Option>
            ))}
        </Select>
    </StyledSortOptions>
);