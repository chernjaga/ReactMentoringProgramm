import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MoviesListStyled: StyledComponent<'section', {}> = styled.section`
    background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.black};
    padding: 32px ${({theme}: ThemeProps<DefaultTheme>) => theme.offsets.sideOffset};
`;