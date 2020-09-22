import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MovieDetailsTagline: StyledComponent<'p', {}> = styled.p`
    color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.grayTint3};
`;