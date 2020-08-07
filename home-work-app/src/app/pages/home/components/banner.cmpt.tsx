import * as React from 'react';
import { IJSX } from '../../../types/IJSX.type';
import { Logo } from '../../../components/logo.cmpt';
import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';
import { AddMovieLink } from './addMovieLink.cmpt';
import { SearchForm } from './SearchForm.cmpt';

const logoColor: string = stylesConfig.colors.pink;
const sideOffset: string = stylesConfig.offsets.sideOffset;

const BannerWrapper: StyledComponent<'div', {}> = styled.div`
    background-image: url('images/banner.jpg'), none;
    background-size: cover;
`;

const BannerDarkCover: StyledComponent<'div', {}> = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    padding: 16px ${sideOffset};
    backdrop-filter: blur(2px);
    position: relative;
`;

const BannerTopLine: StyledComponent<'div', {}> = styled.div`
    display: flex;
    weight: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const Banner: IJSX = () => (
    <BannerWrapper>
        <BannerDarkCover>
            <BannerTopLine>
                <Logo logoColor={logoColor}/>
                <AddMovieLink></AddMovieLink>
            </BannerTopLine>
            <SearchForm/>
        </BannerDarkCover>
    </BannerWrapper>
);