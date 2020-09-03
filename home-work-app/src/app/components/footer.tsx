import styled, { StyledComponent }  from 'styled-components';
import { Logo } from './Logo';
import { stylesConfig } from '../configs/style.configs';

const logoColor: string = stylesConfig.colors.pink;

const StyledFooter: StyledComponent<'footer', {}> = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
`;

export const Footer: React.FC = () => (
    <StyledFooter>
        <Logo logoColor={logoColor}/>
    </StyledFooter>
);