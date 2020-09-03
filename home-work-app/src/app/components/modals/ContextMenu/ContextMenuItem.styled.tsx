import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const ContextMenuItem: StyledComponent<'li', {}> = styled.li`
    padding: 8px 32px 8px 16px;
    cursor: pointer;
    &:hover {
        background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.pink};
    }
`;
