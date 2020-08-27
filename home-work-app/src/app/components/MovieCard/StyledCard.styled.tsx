import styled, { StyledComponent }  from 'styled-components';

export const StyledCard: StyledComponent<'span', {}> = styled.span`
    overflow: hidden;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 82% 13% 5%;
    grid-auto-rows: max-content;
`;