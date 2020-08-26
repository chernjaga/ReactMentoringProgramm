import ReactDOM from 'react-dom';

type ModalProps = {
    modalRoot: HTMLElement
};

export class ModalPortal extends React.Component<ModalProps> {
    modalRoot: HTMLElement;
    modalContainer: HTMLElement;

    constructor(props: ModalProps) {
        super(props);
        this.modalContainer = document.createElement('div');
    }

    componentDidMount(): void {
        this.props.modalRoot.appendChild(this.modalContainer);
    }

    componentWillUnmount(): void {
        this.props.modalRoot.removeChild(this.modalContainer);
    }

    render(): JSX.Element {
        return ReactDOM.createPortal(this.props.children, this.modalContainer);
    }
}
