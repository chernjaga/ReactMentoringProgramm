import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../../../configs/style.configs';

export const StyledLink: StyledComponent<'div', {}> = styled.div.attrs({
    role: 'button'
})`
    background-color: rgba(255, 255, 255, 0.25);
    color: ${stylesConfig.colors.pink};
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.3rem;
    &:hover {
        background-color: rgba(255, 255, 255, 0.35);
    }
`;
