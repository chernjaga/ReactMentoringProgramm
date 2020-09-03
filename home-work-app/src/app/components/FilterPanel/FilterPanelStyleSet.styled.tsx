import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

const activeColor: string = stylesConfig.colors.pink;

export const StyledFilterPanel: StyledComponent<'div', {}> = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid ${stylesConfig.colors.grayTint2};
    margin-bottom: 16px;
`;

export const FilterOptions: StyledComponent<'ul', {}> = styled.ul`
    display: flex;
    gap: 16px;
    position: relative;
    justify-content: space-between;
    width: 40%;
`;

export const FilterOptionItem: StyledComponent<'li', {}> = styled.li`
    font-size: 1rem;
    cursor: pointer;
    width: max-content;
    position:relative;
    &:hover {
        color: ${activeColor};
    };
        :hover>span:before {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 1px #f65261 solid;
        padding: 17px 0;
        z-index: 1;
    }
`;