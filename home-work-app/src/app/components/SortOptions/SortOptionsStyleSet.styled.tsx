import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

export const Select: StyledComponent<'select', {}> = styled.select.attrs({
    name: 'sortOptions',
    id: 'sortOptions'
})`
    background-color: ${stylesConfig.colors.black};
    border: none;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 4px;
    padding: 8px;
    margin-left: 8px;
    box-sizing: border-box;
    &:hover {
        background-color: ${stylesConfig.colors.pink};
    }
`;

export const Option: StyledComponent<'option', {}> = styled.option`
    background-color: ${stylesConfig.colors.black};
    font-size: 1rem;
`;

export const StyledSortOptions: StyledComponent<'div', {}> = styled.div`
    color: ${stylesConfig.colors.grayTint3};
`;