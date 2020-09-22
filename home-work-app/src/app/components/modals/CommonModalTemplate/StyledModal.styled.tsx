import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const StyledModal: StyledComponent<'div', {}> = styled.div`
    position: relative;
    margin: auto;
    width: 60%;
    max-width: 500px;
    padding: 24px;
    box-shadow: 0 0 16px #000;
    border-radius: 8px;
    background-color: ${({theme}:ThemeProps<DefaultTheme>) => theme.colors.black};
`;
