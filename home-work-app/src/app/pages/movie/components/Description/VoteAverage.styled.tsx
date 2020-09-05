import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const VoteAverage: StyledComponent<'span', {}> = styled.span`
    font-size: 24px;
    line-height: 32px;
    padding: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${(({theme}: ThemeProps<DefaultTheme>) => theme.colors.green)};
    border: 1px solid ${(({theme}: ThemeProps<DefaultTheme>) => theme.colors.white)};
`;