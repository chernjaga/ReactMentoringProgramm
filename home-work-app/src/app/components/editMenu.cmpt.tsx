import styled, { StyledComponent }  from 'styled-components';
import * as React from 'react';
import { IJSX } from '../types';
import { stylesConfig } from '../configs/style.configs';

const StyledEditMenu: StyledComponent<'div', {}> = styled.div.attrs({
    className: 'hoverMenu'
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;
const MenuIcon: StyledComponent<'div', {}> = styled.div`
    position: absolute;
    border-radius: 50%;
    top: 15px;
    width: 32px;
    height: 32px;
    right: 7%;
    display: flex;
    font-weight: 900;
    line-height: 16px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    background-color: ${stylesConfig.colors.black};
    &:hover {
        background-color: ${stylesConfig.colors.pink};
    }
`;

export const EditMenu: IJSX = () => (
    <StyledEditMenu>
        <MenuIcon>&#8942;</MenuIcon>
    </StyledEditMenu>
);