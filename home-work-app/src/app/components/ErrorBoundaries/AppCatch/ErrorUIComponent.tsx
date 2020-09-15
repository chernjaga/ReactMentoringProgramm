import styled, { StyledComponent } from 'styled-components';

const StyledError: StyledComponent<'div', {}> = styled.div`
  padding: 32px;
`;

export const ErrorUIComponent: React.FC = () => (
    <StyledError>
        <h1>Application is not Available.</h1>
    </StyledError>
);
