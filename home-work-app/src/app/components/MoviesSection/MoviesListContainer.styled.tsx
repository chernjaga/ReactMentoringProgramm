import styled, { StyledComponent } from 'styled-components';

export const MoviesListContainer: StyledComponent<'ul', {}> = styled.ul`
    padding-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 32px;
`;