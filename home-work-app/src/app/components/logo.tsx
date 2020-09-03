import styled, { StyledComponent, DefaultTheme, ThemeProps } from 'styled-components';

const StyledLogo: StyledComponent<'h1', {}> = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.5rem;
    height: 1.5rem;
    cursor: default;
`;

const BoldText: StyledComponent<'span', {}> = styled.span`
    color: ${({theme}: ThemeProps<DefaultTheme>) => theme.constants.logoColor};
    font-weight: 900;
`;

export const Logo: React.FC = () => (
    <StyledLogo>
        <BoldText >netflix</BoldText>roulette
    </StyledLogo>
);