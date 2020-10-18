import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MovieCardGenres: StyledComponent<'div', {}> = styled.div`
    grid-area: 3/1/3/3;
    background-color: ${({ theme }: ThemeProps<DefaultTheme>): string => theme.colors.black};
    font-size: 0.6rem;
    z-index: 1;
`;
