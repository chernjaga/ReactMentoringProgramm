import ReactDOM from 'react-dom';
import $ from 'jquery';

type ModalProps = {
    modalRoot: HTMLElement
};

export class ModalPortal extends React.Component<ModalProps> {
    modalRoot: HTMLElement;
    modalContainer: HTMLElement;

    constructor(props: ModalProps) {
        super(props);
        this.modalContainer = document.createElement('div');
        this.modalContainer.setAttribute('id', 'modalPortal');
    }

    componentDidMount(): void {
        if (this.props.modalRoot === document.body) {
            $('#root').addClass('blurred');
        }
        this.props.modalRoot.appendChild(this.modalContainer);
    }

    componentWillUnmount(): void {
        this.props.modalRoot.removeChild(this.modalContainer);
        $('#root').removeClass('blurred');
    }

    render(): JSX.Element {
        return ReactDOM.createPortal(this.props.children, this.modalContainer);
    }
}
