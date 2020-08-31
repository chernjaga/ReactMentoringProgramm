import { ModalWindowWrapper } from "../ModalWindowWrapper";
import { StyledModal } from "../StyledModal.styled";
import { ModalHeader } from "../ModalHeader.styled";
import { CloseSymbol } from "../CloseSymbol";

export class DeleteModal extends React.PureComponent {
    render(): JSX.Element {
        return (
            <ModalWindowWrapper>
                <StyledModal>
                    <ModalHeader>
                        <CloseSymbol/>
                    </ModalHeader>
                    <h2>
                        DELETE MOVIE
                    </h2>
                </StyledModal>
            </ModalWindowWrapper>
        );
    }
}