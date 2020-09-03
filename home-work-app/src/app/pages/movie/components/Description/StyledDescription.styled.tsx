import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../../../configs/style.configs';

const sideOffset: string = stylesConfig.offsets.sideOffset;
const backGroundColor: string = stylesConfig.colors.black;

export const StyledDescription: StyledComponent<'div', {}> = styled.div`
    background-color: ${backGroundColor};
    padding: 16px ${sideOffset};
`;
