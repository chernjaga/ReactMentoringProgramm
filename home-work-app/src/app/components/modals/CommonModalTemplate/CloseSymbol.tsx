import styled, { StyledComponent, ThemeProps, DefaultTheme } from 'styled-components';

const StyledWrapper: StyledComponent<'span', {}> = styled.span`
    transform: rotateZ(45deg);
    display: inline-block;
    cursor: pointer;
    &:hover {
        color: ${({theme}:ThemeProps<DefaultTheme>) => theme.colors.pink}
    }
`;
export const CloseSymbol: React.FC = () => (
    <StyledWrapper>
        +
    </StyledWrapper>
);
