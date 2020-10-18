import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MovieCardYear: StyledComponent<'div', {}> = styled.div`
    grid-area: 2/2/2/2;
    background-color: ${({ theme }: ThemeProps<DefaultTheme>): string => theme.colors.black};
    padding: 8px 0 8px 8px;
    z-index: 1;
    text-align: right;
`;
