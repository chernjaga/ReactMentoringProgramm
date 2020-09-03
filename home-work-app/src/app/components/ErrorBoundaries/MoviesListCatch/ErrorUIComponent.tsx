import styled, { StyledComponent } from 'styled-components';

const StyledError: StyledComponent<'div', {}> = styled.div`
    padding: 32px;
`;

export const ErrorUIComponent: React.FC = () => (
    (<StyledError>
        <h3>
            Component is not available
        </h3>
    </StyledError>)
);