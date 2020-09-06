import { CommonModalTemplate } from '../CommonModalTemplate/CommonModalTemplate';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { EditMenuProps } from '../../../types';
import { DeleteModalHeader } from './DeleteModalHeader.styled';

export class DeleteModal extends React.PureComponent<EditMenuProps> {
    closeHandler(event: React.MouseEvent): void {
        this.props.onClose(event);
        event.stopPropagation();
    }

    render(): JSX.Element {
        return (
            <CommonModalTemplate onClose={this.closeHandler.bind(this)}>
                <>
                    <DeleteModalHeader>
                        DELETE MOVIE
                    </DeleteModalHeader>
                    <p>
                        Are you sure you want to delete this movie?
                    </p>
                    <ButtonPanel>
                        <Button buttonTheme="saveButton">CANCEL</Button>
                    </ButtonPanel>
                </>
            </CommonModalTemplate>
        );
    }
}