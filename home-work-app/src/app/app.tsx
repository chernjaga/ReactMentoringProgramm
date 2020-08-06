import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routing } from './pages/routing';
import { Banner } from './pages/home/components/banner.cmpnt';
import { IJSX } from './types';
import styled from 'styled-components';

type App = () => void;
const ROOT_ELEMENT: HTMLElement = document.getElementById('root');

const BodyWrapper = styled.div`
`;

const AppBody: IJSX = () => (
    <>
        <Routing/>
    </>
);

export const App: App = () => {
    ReactDOM.render(
        <AppBody/>,
        ROOT_ELEMENT
    );
};
