
import { IJSX } from '../../../types/IJSX.type';
import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

const StyledLink: StyledComponent<'a', {}> = styled.a.attrs({
    href: '/home'
})`
    background-color: rgba(255, 255, 255, 0.25);
    color: ${stylesConfig.colors.pink};
    padding: 8px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 1.3rem;
    &:hover {
        background-color: rgba(255, 255, 255, 0.35);
    }
`;

export const AddMovieLink: IJSX = () => (
    <StyledLink>+ ADD MOVIE</StyledLink>
);
