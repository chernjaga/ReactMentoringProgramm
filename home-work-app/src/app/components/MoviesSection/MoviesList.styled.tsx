import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

export const MoviesListStyled: StyledComponent<'section', {}> = styled.section`
    background-color: ${stylesConfig.colors.black};
    padding: 32px ${stylesConfig.offsets.sideOffset};
`;