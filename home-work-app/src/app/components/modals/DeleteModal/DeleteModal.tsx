import { CommonModalTemplate } from '../CommonModalTemplate/CommonModalTemplate';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { EditMenuProps } from '../../../types';
import { DeleteModalHeader } from './DeleteModalHeader.styled';
import { store } from '../../../redux/store';

export const DeleteModal: React.FC<EditMenuProps> = (props: EditMenuProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        props.onClose(event);
        event.stopPropagation();
    };

    const deleteHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        store.dispatch({
            type: 'delete',
            payload: {
                movieId: props.movieId
            }
        });
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