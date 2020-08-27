import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

const cardBackground: string = stylesConfig.colors.black;

export const Genres: StyledComponent<'div', {}> = styled.div`
    grid-area: 3/1/3/3;
    background-color: ${cardBackground};
    font-size: 0.6rem;
    z-index: 1;
`;