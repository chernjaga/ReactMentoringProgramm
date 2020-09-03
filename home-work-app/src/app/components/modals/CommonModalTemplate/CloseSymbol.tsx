import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

const StyledWrapper: StyledComponent<'span', {}> = styled.span`
    transform: rotateZ(45deg);
    display: inline-block;
    cursor: pointer;
    &:hover {
        color: ${stylesConfig.colors.pink}
    }
`;

export const CloseSymbol: React.FC = () => (
    <StyledWrapper>
        +
    </StyledWrapper>
);
