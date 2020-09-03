import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

export const StyledContextMenu: StyledComponent<'div', {}> = styled.div`
    background-color: ${stylesConfig.colors.black};
    position: absolute;
    top: 16px;
    right: 7%;
    padding: 8px 0;
    border-radius: 4px;
    font-weight: 100;
    font-size: 0.8rem;
`;