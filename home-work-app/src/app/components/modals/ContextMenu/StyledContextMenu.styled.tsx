import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const StyledContextMenu: StyledComponent<'div', {}> = styled.div`
    background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.black};
    position: absolute;
    top: 16px;
    right: 7%;
    padding: 8px 0;
    border-radius: 4px;
    font-weight: 100;
    font-size: 0.8rem;
`;