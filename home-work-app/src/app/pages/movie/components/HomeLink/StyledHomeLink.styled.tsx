import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../../../configs/style.configs';

export const StyledHomeLink: StyledComponent<'span', {}> = styled.span`
    font-size: 2.5rem;
    color: ${stylesConfig.colors.pink};
    &:hover{
        opacity: 0.6;
    }
`;