import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MovieDetailsTagline: StyledComponent<'p', {}> = styled.p`
    color: ${({ theme }: ThemeProps<DefaultTheme>): string => theme.colors.grayTint3};
`;
