import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MovieCardTitle: StyledComponent<'div', {}> = styled.div`
    grid-area: 2/1/2/1;
    padding: 8px 0;
    background-color: ${({ theme }: ThemeProps<DefaultTheme>): string => theme.colors.black};
    font-size: 0.9rem;
    z-index: 1;
`;
