import styled, { StyledComponent }  from 'styled-components';
import * as React from 'react';
import { IJSX } from '../types';
import { stylesConfig } from '../configs/style.configs';

const logoColor: string = stylesConfig.colors.pink;

const StyledLogo: StyledComponent<"div", {}> = styled.div`
    color: ${logoColor};
    font-size: 1.5rem;
`;

const BoldText: StyledComponent<"span", {}> = styled.span`
    font-weight: 900;
    color: ${logoColor};
    font-size: 1.5rem;
`;

export const Logo: IJSX = () => (
    <StyledLogo>
        <BoldText>netflix</BoldText>roulette
    </StyledLogo>
);