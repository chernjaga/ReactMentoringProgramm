import { ModalWindowWrapper } from './ModalWindowWrapper';
import { StyledModal } from './StyledModal.styled';
import { ModalHeader } from './ModalHeader.styled';
import { CloseSymbol } from './CloseSymbol';

type CommonModalProps = {
    children: JSX.Element,
    onClose: (event: React.MouseEvent) => void
};

export const CommonModalTemplate: React.FC<CommonModalProps> = (props: CommonModalProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        props.onClose(event);
        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <ModalWindowWrapper>
            <StyledModal>
                <ModalHeader>
                    <span onClick={closeHandler.bind(this)}>
                        <CloseSymbol/>
                    </span>
                </ModalHeader>
                {(props.children)}
            </StyledModal>
        </ModalWindowWrapper>
    );
};