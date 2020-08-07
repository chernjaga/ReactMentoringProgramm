import * as React from 'react';
import { IJSX } from '../../../types/IJSX.type';
import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

const Label: StyledComponent<'label', {}> = styled.label.attrs({
    htmlFor: 'searchForm'
})`
    font-size: 3rem;
    font-weight: 100;
    display: block;
`;

export const SearchForm: IJSX = () => (
    <form>
        <Label>FIND YOUR MOVIE</Label>
        <input type="text" id="searchForm"/>
    </form>
);