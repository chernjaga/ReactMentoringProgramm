import styled, { StyledComponent }  from 'styled-components';
import * as React from 'react';
import { IJSX } from '../types';
import { Logo } from './logo.cmpt';
import { stylesConfig } from '../configs/style.configs';

const logoColor: string = stylesConfig.colors.pink;

const StyledFooter: StyledComponent<"div", {}> = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer: IJSX = () => (
    <StyledFooter>
        <Logo logoColor={logoColor}/>
    </StyledFooter>
);