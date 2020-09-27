import ReactDOM from 'react-dom';
import { Routing } from './pages/routing';
import { Footer } from './components/Footer/Footer';
import { AppCatch } from './components/ErrorBoundaries/AppCatch/AppCatch.error';
import { GlobalStyle } from './configs/GlobalStyle';
import { mainTheme } from './configs/MainTheme';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store';
import { MovieService } from './services/MovieService';

type App = () => void;

const ROOT_ELEMENT: HTMLElement = document.getElementById('root');

const AppBody: React.FC = () => {
    MovieService.getMovies();

    return (
        <AppCatch>
            <Provider store={store}>
                <ThemeProvider theme={mainTheme}>
                    <GlobalStyle/>
                    <Routing/>
                    <Footer/>
                </ThemeProvider>
            </Provider>
        </AppCatch>
    );
};

export const App: App = () => {
    ReactDOM.render(
        <AppBody/>,
        ROOT_ELEMENT
    );
};
