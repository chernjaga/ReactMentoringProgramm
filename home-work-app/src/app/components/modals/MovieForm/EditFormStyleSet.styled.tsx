import styled, { StyledComponent } from 'styled-components';
import { stylesConfig } from '../../../configs/style.configs';

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

export const Input: StyledComponent<'input', {}> = styled.input`
    width: 100%;
    background-color: ${stylesConfig.colors.grayTint1};
    font-size: 1rem;
    padding: 8px;
    box-sizing: border-box;
`;
