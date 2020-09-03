
import { IError } from '../../../interfaces/IError';
import { ErrorUIComponent } from './ErrorUIComponent';

export class MoviesListCatch extends React.Component<IError.Props, IError.State> {
    constructor (props: IError.Props)
    {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        this.setState({ hasError: true });
    }

    render(): JSX.Element {
        return this.state.hasError ? (<ErrorUIComponent/>) : this.props.children;
    }
}