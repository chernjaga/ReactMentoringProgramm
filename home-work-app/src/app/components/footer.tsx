import styled, { StyledComponent } from 'styled-components';
import { Logo } from './Logo';

const StyledFooter: StyledComponent<'footer', {}> = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
`;

export const Footer: React.FC = () => (
    <StyledFooter>
        <Logo/>
    </StyledFooter>
);