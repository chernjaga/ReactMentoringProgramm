import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

export const StyledMenuItem: StyledComponent<'li', {}> = styled.li.attrs({
    role: 'menuItem'
})`
    padding: 8px 32px 8px 16px;
    cursor: pointer;
    &:hover {
        background-color: ${stylesConfig.colors.pink};
    }
`;
