import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routing } from './pages/routing'

const rootElement = document.getElementById('root');

export const App = () => {
    ReactDOM.render(
        <Routing/>,
        rootElement
    );
} 
