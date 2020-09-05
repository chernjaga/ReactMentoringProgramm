import ReactDOM from 'react-dom';

type ModalPortalProps = {
    modalRoot: HTMLElement
};
export class ModalPortal extends React.Component<ModalPortalProps> {
    modalContainer: HTMLElement;

    constructor(props: ModalPortalProps) {
        super(props);
        this.modalContainer = document.createElement('div');
    }

    componentDidMount(): void {
        if (this.props.modalRoot === document.body) {
        }
        this.props.modalRoot.appendChild(this.modalContainer);
    }

    componentWillUnmount(): void {
        this.props.modalRoot.removeChild(this.modalContainer);
    }

    render(): JSX.Element {
        return ReactDOM.createPortal(this.props.children, this.modalContainer);
    }
}
