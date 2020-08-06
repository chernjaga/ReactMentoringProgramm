import * as React from 'react';
import { IJSX } from '../../../types/IJSX.type';
import { Logo } from '../../../components/logo.cmpt';
import styled, { StyledComponent }  from 'styled-components';

const BannerWrapper: StyledComponent<'div', {}> = styled.div`
    background-color: black;
`;

export const Banner: IJSX = () => (
    <BannerWrapper>
        <Logo/>
        Banner
    </BannerWrapper>
);