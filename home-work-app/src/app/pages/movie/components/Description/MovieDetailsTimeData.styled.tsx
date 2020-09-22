import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

export const MovieDetailsTimeData: StyledComponent<'p', {}> = styled.p`
    font-size: 1.5rem;
    padding: 16px 0;
    display: flex;
    gap: 24px;
    span {
        color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.pink};
    }
`;