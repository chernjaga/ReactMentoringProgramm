import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

export const YearBorder: StyledComponent<'span', {}> = styled.span`
    border-radius: 4px;
    padding: 4px 8px;
    border: #fff solid 1px;
    font-size: 0.6rem;
`;