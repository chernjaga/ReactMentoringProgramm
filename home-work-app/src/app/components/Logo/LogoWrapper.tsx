import styled, { StyledComponent, DefaultTheme, ThemeProps } from 'styled-components';

export const LogoWrapper: StyledComponent<'h1', {}> = styled.h1`
    color: ${({theme}: ThemeProps<DefaultTheme>) => theme.constants.logoColors.primary};
    font-size: 1.5rem;
    line-height: 1.5rem;
    height: 1.5rem;
    cursor: default;
`;