import styled, { DefaultTheme, StyledComponent, ThemeProps } from 'styled-components';

export const MovieCardPoster: StyledComponent<'div', {}> = styled.div`
    grid-area: 1/1/2/2;
    max-width: 130%;
    img {
        color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.grayTint1};
    }
`;