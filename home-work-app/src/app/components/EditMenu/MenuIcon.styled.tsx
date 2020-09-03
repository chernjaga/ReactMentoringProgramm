import styled, { StyledComponent, DefaultTheme, ThemeProps } from 'styled-components';

export const MenuIcon: StyledComponent<'div', {}> = styled.div`
    position: absolute;
    border-radius: 50%;
    top: 16px;
    width: 32px;
    height: 32px;
    right: 7%;
    display: flex;
    font-weight: 900;
    line-height: 16px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.black};
    &:hover {
        background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.pink};
    }
`;