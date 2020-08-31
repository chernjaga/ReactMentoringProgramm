import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

type ButtonProps = {
    color: string,
    background: string,
    border: string
}

export const EditForm: StyledComponent<'form', {}> = styled.form`
    font-size: 1rem;
    width:100%;
`;
export const EditFormFieldset: StyledComponent<'fieldset', {}> = styled.fieldset`
    border: none;
`;
export const EditFormLegend: StyledComponent<'legend', {}> = styled.legend`
    margin: 0 auto;
    border: none;
    font-size: 1.4rem;
`;
export const Label: StyledComponent<'label', {}> = styled.label`
    display: block;
    color: ${stylesConfig.colors.pink};
    font-size: 1rem;
    margin-bottom: 8px;
    font-weight: 100;
`;

export const ButtonPanel: StyledComponent<'div', {}> = styled.div`
    display: flex;
    width: 100%;
    margin-top: 24px;
    flex-direction: row-reverse;
    gap: 16px;
`;
export const Button: StyledComponent<'button', {}, ButtonProps> = styled.button`
    background-color: ${(props: ButtonProps) => props.background};
    color: ${(props: ButtonProps) => props.color};
    border: 1px solid ${(props: ButtonProps) => props.border};
    font-size: 1rem;
    word-wrap: break-word;
    width: 20%;
    padding: 8px;
    font-weight: 100;
    &:hover {
        opacity: 0.6;
    }
`;
export const Input: StyledComponent<'input', {}> = styled.input`
    width: 100%;
    background-color: ${stylesConfig.colors.grayTint1};
    font-size: 1rem;
    padding: 8px;
    box-sizing: border-box;
`;
