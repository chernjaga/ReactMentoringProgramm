import styled, { StyledComponent }  from 'styled-components';
import * as React from 'react';
import { IJSX } from '../types';

type StyledProps = {
    logoColor: string
};

const StyledLogo: StyledComponent<'div', {}, StyledProps> = styled.div`
    color: ${(props: StyledProps) => props.logoColor};
    font-size: 1.5rem;
    line-height: 1.5rem;
    height: 1.5rem;
    cursor: default;
`;

const BoldText: StyledComponent<'span', {}, StyledProps> = styled.span`
    color: ${(props: StyledProps) => props.logoColor};
    font-weight: 900;
`;

export const Logo: IJSX = (props: StyledProps) => (
    <StyledLogo logoColor={props.logoColor}>
        <BoldText logoColor={props.logoColor}>netflix</BoldText>roulette
    </StyledLogo>
);