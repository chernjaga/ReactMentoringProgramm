import styled, { StyledComponent } from 'styled-components';

type ButtonProps = {
    color: string,
    background: string,
    border: string
};

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
    width: 25%;
    padding: 8px;
    font-weight: 100;
    &:hover {
        opacity: 0.6;
    }
`;