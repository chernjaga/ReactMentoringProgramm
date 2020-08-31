import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

export const StyledModal: StyledComponent<'div', {}> = styled.div`
    position: relative;
    margin: 16px auto;
    max-width: 30%;
    padding: 24px;
    box-shadow: 0 0 16px #000;
    border-radius: 8px;
    background-color: ${stylesConfig.colors.black};
`;