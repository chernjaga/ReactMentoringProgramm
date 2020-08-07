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

const Form: StyledComponent<'form', {}> = styled.form.attrs({
    htmlFor: 'searchForm'
})`
    display: block;
`;
export const SearchForm: IJSX = () => (
    <Form>
        <Label>FIND YOUR MOVIE</Label>
        <input type="text" id="searchForm"/>
    </Form>
);