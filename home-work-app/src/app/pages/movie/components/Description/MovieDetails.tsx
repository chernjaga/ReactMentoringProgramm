import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MovieDetails: StyledComponent<'div', {}> = styled.div`
    background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.black};
    padding: 16px ${({theme}: ThemeProps<DefaultTheme>) => theme.offsets.sideOffset};
    display: flex;
    gap: 5%;
    flex-wrap: wrap;
    justify-content: center;
`;
