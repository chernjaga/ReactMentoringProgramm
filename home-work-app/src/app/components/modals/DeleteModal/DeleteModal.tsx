import { CommonModalTemplate } from '../CommonModalTemplate/CommonModalTemplate';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { EditMenuProps } from '../../../types';
import { DeleteModalHeader } from './DeleteModalHeader.styled';

export const DeleteModal: React.FC<EditMenuProps> = (props: EditMenuProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        props.onClose(event);
        event.stopPropagation();
    };

    return  (
        <CommonModalTemplate onClose={closeHandler}>
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
};