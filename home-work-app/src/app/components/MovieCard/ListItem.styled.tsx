import styled, { StyledComponent }  from 'styled-components';
import { StyledEditMenu } from '../EditMenu/StyledEditMenu.styled';

export const ListItem: StyledComponent<'li', {}> = styled.li`
    position: relative;
    &:hover ${StyledEditMenu} {
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
    }
`;