import { ModalWindowWrapper } from './ModalWindowWrapper';
import { StyledModal } from './StyledModal.styled';
import { ModalHeader } from './ModalHeader.styled';
import { CloseSymbol } from './CloseSymbol';

type CommonModalProps = {
    children: JSX.Element,
    onClose: (event: React.MouseEvent) => void
}

export class CommonModalTemplate extends React.PureComponent<CommonModalProps> {
    closeHandler(event: React.MouseEvent): void {
        this.props.onClose(event);
        event.stopPropagation();
    }

    render(): JSX.Element {
        return (
            <ModalWindowWrapper>
                <StyledModal>
                    <ModalHeader>
                        <span onClick={this.closeHandler.bind(this)}>
                            <CloseSymbol/>
                        </span>
                    </ModalHeader>
                    {(this.props.children)}
                </StyledModal>
            </ModalWindowWrapper>
        );
    }
}