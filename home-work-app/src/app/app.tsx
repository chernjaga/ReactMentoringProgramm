import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routing } from './pages/routing';

type App = () => void;
const ROOT_ELEMENT: HTMLElement = document.getElementById('root');

export const App: App = () => {
    ReactDOM.render(
        <Routing/>,
        ROOT_ELEMENT
    );
};
