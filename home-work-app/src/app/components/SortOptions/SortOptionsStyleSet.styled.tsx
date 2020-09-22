import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const Select: StyledComponent<'select', {}> = styled.select.attrs({
    name: 'sortOptions',
    id: 'sortOptions'
})`
    background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.black};
    border: none;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 4px;
    padding: 8px;
    margin-left: 8px;
    box-sizing: border-box;
    &:hover {
        background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.pink};
    }
`;

export const Option: StyledComponent<'option', {}> = styled.option`
    background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.black};
    font-size: 1rem;
`;

export const StyledSortOptions: StyledComponent<'div', {}> = styled.div`
    color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.grayTint3};
`;