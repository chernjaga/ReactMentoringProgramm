
import styled, { StyledComponent } from 'styled-components';
import { IError } from '../../interfaces/IError';

const StyledError: StyledComponent<'div', {}> = styled.div`
    padding: 32px;
`;

export class AppCatch extends React.Component<IError.Props, IError.State> {
    state: IError.State;
    props: IError.Props;

    constructor (props: IError.Props)
    {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error: Error): IError.State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        this.setState({
            hasError: true
        });
    }

    render(): JSX.Element {
        if (this.state.hasError) {
            return (<StyledError>
                        <h1>
                            Application is not Available.
                        </h1>
                    </StyledError>);
        }

        return this.props.children;
    }
}