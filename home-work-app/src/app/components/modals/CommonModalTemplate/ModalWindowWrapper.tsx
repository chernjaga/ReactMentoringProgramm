import styled, { StyledComponent } from 'styled-components';

export const ModalWindowWrapper: StyledComponent<'div', {}> = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    overflow: auto;
    background-color: rgba(35, 35, 35, 0.6);
`;