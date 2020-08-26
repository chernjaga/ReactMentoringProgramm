import React from 'react';
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

const InputWrapper: StyledComponent<'div', {}> = styled.div`
    margin: 32px auto 48px;
    display: flex;
    gap: 16px;
    width: 100%;
`;

const Form: StyledComponent<'form', {}> = styled.form.attrs({
    htmlFor: 'searchForm'
})`
    display: block;
    position: relative;
    width: 70%;
    margin: 32px auto;
`;

const Input: StyledComponent<'input', {}> = styled.input.attrs({
    type: 'text',
    id: 'searchForm',
    placeholder: 'What do you want to watch?'
})`
    font-size: 1.2rem;
    padding: 8px;
    flex-grow: 3;
    background: linear-gradient(rgba(66,66,66,0.5), rgba(0,0,0,1), rgba(66,66,66,0.5));
`;

const Button: StyledComponent<'button', {}> = styled.button.attrs({
    type: 'submit'
})`
    font-size: 1.2rem;
    font-weight: 100;
    padding: 8px;
    background-color: ${stylesConfig.colors.pink};
    flex-grow: 1;
    &:hover {
        background-color: rgba(246, 82, 97, 0.75);
    };
    cursor: pointer
`;

export const SearchForm: IJSX = () => (
    <Form>
        <Label>FIND YOUR MOVIE</Label>
        <InputWrapper>
            <Input/>
            <Button>SEARCH</Button>
        </InputWrapper>
    </Form>
);