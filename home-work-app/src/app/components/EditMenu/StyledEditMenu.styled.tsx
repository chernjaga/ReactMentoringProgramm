import styled, { StyledComponent } from 'styled-components';

export const StyledEditMenu: StyledComponent<'div', {}> = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    &:hover {
        display: block;
    }
`;