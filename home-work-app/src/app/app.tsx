
import ReactDOM from 'react-dom';
import { Routing } from './pages/routing';
import { Footer } from './components/Footer';
import { AppCatch } from './components/ErrorBoundaries/AppCatch.error';

type App = () => void;

const ROOT_ELEMENT: HTMLElement = document.getElementById('root');

const AppBody: React.FC = () => (
    <AppCatch>
        <>
            <Routing/>
            <Footer/>
        </>
    </AppCatch>
);

export const App: App = () => {
    ReactDOM.render(
        <AppBody/>,
        ROOT_ELEMENT
    );
};
