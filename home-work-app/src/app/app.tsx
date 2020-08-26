
import ReactDOM from 'react-dom';
import { Routing } from './pages/routing';
import { Footer } from './components/footer';

type App = () => void;
const ROOT_ELEMENT: HTMLElement = document.getElementById('root');

const AppBody: React.FC = () => (
    <>
        <Routing/>
        <Footer/>
    </>
);

export const App: App = () => {
    ReactDOM.render(
        <AppBody/>,
        ROOT_ELEMENT
    );
};
