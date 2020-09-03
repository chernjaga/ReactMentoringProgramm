import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import { mainTheme } from '../../../configs/mainTheme';
import { get } from 'lodash';

type ButtonProps = {
    buttonTheme: string
};

export const ButtonPanel: StyledComponent<'div', {}> = styled.div`
    display: flex;
    width: 100%;
    margin-top: 24px;
    flex-direction: row-reverse;
    gap: 16px;
`;

export const Button: StyledComponent<'button', {}, ButtonProps> = styled.button`
    background-color: ${(props: ButtonProps) =>
        get(mainTheme, `constants.${props.buttonTheme}.backgroundColor`)};
    color: ${(props: ButtonProps) =>
        get(mainTheme, `constants.${props.buttonTheme}.color`)};
    border: 1px solid ${(props: ButtonProps) =>
        get(mainTheme, `constants.${props.buttonTheme}.border`)};
    font-size: 1rem;
    word-wrap: break-word;
    width: 25%;
    padding: 8px;
    font-weight: 100;
    &:hover {
        opacity: 0.6;
    }
`;