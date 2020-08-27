import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

const cardBackground: string = stylesConfig.colors.black;

export const Year: StyledComponent<'div', {}> = styled.div`
    grid-area: 2/2/2/2;
    background-color: ${cardBackground};
    padding: 8px 0 8px 8px;
    z-index: 1;
    text-align: right;
`;