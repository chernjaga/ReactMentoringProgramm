import * as React from 'react';
import {TestWrapper} from './styled-components/testWrapper.styled';

export class HomePage extends React.PureComponent {
    render(): JSX.Element {
        return (
            <TestWrapper>
                <div> Hello HOME !!!()</div>
            </TestWrapper>
        );
    }
}