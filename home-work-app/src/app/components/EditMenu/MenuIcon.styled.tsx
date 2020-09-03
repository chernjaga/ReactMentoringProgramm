import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

export const MenuIcon: StyledComponent<'div', {}> = styled.div`
    position: absolute;
    border-radius: 50%;
    top: 16px;
    width: 32px;
    height: 32px;
    right: 7%;
    display: flex;
    font-weight: 900;
    line-height: 16px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    background-color: ${stylesConfig.colors.black};
    &:hover {
        background-color: ${stylesConfig.colors.pink};
    }
`;