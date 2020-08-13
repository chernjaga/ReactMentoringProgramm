import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routing } from './pages/routing';
import { IJSX } from './types';
import { Footer } from './components/footer.cmpt';
import { MovieList } from './components/movieList.cmpt';

type App = () => void;
const ROOT_ELEMENT: HTMLElement = document.getElementById('root');

const AppBody: IJSX = () => (
    <>
        <Routing/>
        <MovieList/>
        <Footer/>
    </>
);

export const App: App = () => {
    ReactDOM.render(
        <AppBody/>,
        ROOT_ELEMENT
    );
};
