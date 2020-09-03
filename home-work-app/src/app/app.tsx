
import ReactDOM from 'react-dom';
import { Routing } from './pages/routing';
import { Footer } from './components/Footer';
import { AppCatch } from './components/ErrorBoundaries/AppCatch/AppCatch.error';
import { GlobalStyle } from './configs/GlobalStyle';
import { MainTheme } from './configs/MainTheme';
import { ThemeProvider } from 'styled-components';

type App = () => void;

const ROOT_ELEMENT: HTMLElement = document.getElementById('root');

const AppBody: React.FC = () => (
    <AppCatch>
        <ThemeProvider theme={MainTheme}>
            <GlobalStyle/>
            <Routing/>
            <Footer/>
        </ThemeProvider>
    </AppCatch>
);

export const App: App = () => {
    ReactDOM.render(
        <AppBody/>,
        ROOT_ELEMENT
    );
};
