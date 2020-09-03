import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const StyledHomeLink: StyledComponent<'span', {}> = styled.span`
    font-size: 2.5rem;
    color: ${({theme}:ThemeProps<DefaultTheme>) => theme.colors.pink};
    &:hover{
        opacity: 0.6;
    }
`;