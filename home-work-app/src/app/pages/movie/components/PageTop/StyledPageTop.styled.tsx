import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const StyledPageTop: StyledComponent<'div', {}> = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px ${({theme}:ThemeProps<DefaultTheme>) => theme.offsets.sideOffset};
    align-items: center;
    background-color: ${({theme}:ThemeProps<DefaultTheme>) => theme.colors.black};
`;