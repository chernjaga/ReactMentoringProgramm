import { CommonModalTemplate } from '../CommonModalTemplate/CommonModalTemplate';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { EditMenuProps } from '../../../types';
import { DeleteModalHeader } from './DeleteModalHeader.styled';

export const DeleteModal: React.FC<EditMenuProps> = ({ movieId, onClose, onMovieDelete}: EditMenuProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        onClose(event);
        event.stopPropagation();
    };

    const deleteHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        onMovieDelete(movieId);
        closeHandler(event);
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
                    <Button buttonTheme="saveButton" onClick={deleteHandler}>DELETE</Button>
                </ButtonPanel>
            </>
        </CommonModalTemplate>
    );
};