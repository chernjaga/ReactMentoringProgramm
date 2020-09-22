import styled, { StyledComponent, DefaultTheme, ThemeProps } from 'styled-components';

export const BoldText: StyledComponent<'span', {}> = styled.span`
    color: ${({theme}: ThemeProps<DefaultTheme>) => theme.constants.logoColors.secondary};
    font-weight: 900;
`;
