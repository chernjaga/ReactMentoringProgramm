import * as React from 'react';
import { Banner } from './components/banner.cmpnt';

export class HomePage extends React.PureComponent {
    render(): JSX.Element {
        return (
            <div>
                <Banner/>
                <div> Hello HOME !!!()</div>
            </div>
        );
    }
}