import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

const cardBackground: string = stylesConfig.colors.black;

export const MovieCardTitle: StyledComponent<'div', {}> = styled.div`
    grid-area: 2/1/2/1;
    padding: 8px 0;
    background-color: ${cardBackground};
    font-size: 0.9rem;
    z-index: 1;
`;