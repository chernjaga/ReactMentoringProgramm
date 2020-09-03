import styled, { StyledComponent }  from 'styled-components';

type StyledProps = {
    logoColor: string
};

const StyledLogo: StyledComponent<'h1', {}> = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    line-height: 1.5rem;
    height: 1.5rem;
    cursor: default;
`;

const BoldText: StyledComponent<'span', {}, StyledProps> = styled.span`
    color: ${(props: StyledProps) => props.logoColor};
    font-weight: 900;
`;

export const Logo: React.FC<StyledProps> = (props: StyledProps) => (
    <StyledLogo>
        <BoldText logoColor={props.logoColor}>netflix</BoldText>roulette
    </StyledLogo>
);