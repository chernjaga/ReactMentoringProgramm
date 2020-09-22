import { Logo } from '../../../../components/Logo/Logo';
import { StyledPageTop } from './StyledPageTop.styled';
import { HomeLink } from '../HomeLink/HomeLink';

export const PageTop: React.FC = () => (
    <StyledPageTop>
        <Logo/>
        <HomeLink/>
    </StyledPageTop>
);