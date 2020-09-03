import styled, { StyledComponent } from 'styled-components';

type SizeProps = {
    size: number
};

export const CloseIcon: StyledComponent<'div', {}, SizeProps>= styled.div`
    text-align: right;
    padding: 0 8px;
    font-size: ${(props: SizeProps) => props.size}rem;
`;