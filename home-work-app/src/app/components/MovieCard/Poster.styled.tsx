import styled, { DefaultTheme, StyledComponent, ThemeProps } from 'styled-components';

export const MovieCardPoster: StyledComponent<'div', {}> = styled.div`
    grid-area: 1/1/2/2;
    max-width: 130%;
    background-image: url('images/movieCover.png'), none, none;
    background-size: contain;
    background-position: center, center;
    background-repeat: no-repeat;
    img {
        color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.grayTint1};
    }
`;