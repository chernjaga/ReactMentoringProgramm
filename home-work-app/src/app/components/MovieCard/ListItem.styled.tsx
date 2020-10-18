import styled, { StyledComponent } from 'styled-components';
import { EditMenu } from '../EditMenu/EditMenu';

export const ListItem: StyledComponent<'li', {}> = styled.li`
    position: relative;
    &:hover ${ EditMenu } {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    &:hover img {
        opacity: 0.5;
    }
    img {
        width: 140%;
        min-height: 330px;
    }
`;