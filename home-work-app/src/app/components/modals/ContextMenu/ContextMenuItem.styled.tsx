import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

export const ContextMenuItem: StyledComponent<'li', {}> = styled.li`
    padding: 8px 32px 8px 16px;
    cursor: pointer;
    &:hover {
        background-color: ${stylesConfig.colors.pink};
    }
`;
