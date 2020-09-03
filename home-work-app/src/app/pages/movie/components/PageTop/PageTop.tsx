import { Logo } from '../../../../components/Logo';
import { stylesConfig } from '../../../../configs/style.configs';
import { StyledPageTop } from './StyledPageTop.styled';
import { HomeLink } from '../HomeLink/HomeLink';

const logoColor: string = stylesConfig.colors.pink;

export const PageTop: React.FC = () => (
    <StyledPageTop>
        <Logo logoColor={logoColor}/>
        <HomeLink/>
    </StyledPageTop>
);