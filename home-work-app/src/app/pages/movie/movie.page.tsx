import { Description } from './components/Description/Description';
import { PageTop } from './components/PageTop/PageTop';

export class Movie extends React.PureComponent {
    render(): JSX.Element {
        return (
            <>
                <PageTop/>
                <Description/>
            </>
        );
    }
}