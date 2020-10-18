import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MoviesListStyled: StyledComponent<'section', {}> = styled.section`
    background-color: ${({ theme }: ThemeProps<DefaultTheme>): string => theme.colors.black};
    padding: 32px ${({ theme }: ThemeProps<DefaultTheme>): string => theme.offsets.sideOffset};
`;
