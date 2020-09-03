import { Logo } from '../../../components/Logo';
import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';
import { AddMovieLink } from './AddMovieLink/AddMovieLink';
import { SearchForm } from './SearchForm/SearchForm';

const logoColor: string = stylesConfig.colors.pink;
const sideOffset: string = stylesConfig.offsets.sideOffset;

const HeaderWrapper: StyledComponent<'header', {}> = styled.header.attrs({
    role: 'header'
})`
    background-image: url('images/header.jpg'), none;
    background-size: cover;
`;

const HeaderDarkCover: StyledComponent<'div', {}> = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    padding: 16px ${sideOffset};
    backdrop-filter: blur(2px);
    position: relative;
`;

const HeaderTopLine: StyledComponent<'div', {}> = styled.div`
    display: flex;
    wight: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const Header: React.FC = () => (
    <HeaderWrapper>
        <HeaderDarkCover>
            <HeaderTopLine>
                <Logo/>
                <AddMovieLink/>
            </HeaderTopLine>
            <SearchForm/>
        </HeaderDarkCover>
    </HeaderWrapper>
);