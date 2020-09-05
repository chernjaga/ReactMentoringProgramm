import styled, { StyledComponent } from 'styled-components';

export const MovieDetailsHeader: StyledComponent<'span', {}> = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: max-content;
    max-width: 100%;
    gap: 24px;
    font-size: 1.5rem;
    margin: 8px 0;
`;