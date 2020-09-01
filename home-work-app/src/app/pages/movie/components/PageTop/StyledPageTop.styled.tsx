import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../../../configs/style.configs';

export const StyledPageTop: StyledComponent<'div', {}> = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px ${stylesConfig.offsets.sideOffset};
    align-items: center;
    background-color: ${stylesConfig.colors.black};
`;