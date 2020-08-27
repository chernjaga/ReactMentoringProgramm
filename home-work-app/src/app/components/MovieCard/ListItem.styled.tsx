import styled, { StyledComponent }  from 'styled-components';

export const ListItem: StyledComponent<'li', {}> = styled.li.attrs({
    className: 'hoverMenuContainer'
})`
    position: relative;
`;