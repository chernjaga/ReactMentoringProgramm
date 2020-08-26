import React from 'react';
import { Description } from './components/description.cmpt';

export class Movie extends React.PureComponent {
    render(): JSX.Element {
        return (
            <Description/>
        );
    }
}