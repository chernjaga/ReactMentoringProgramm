import { CommonModalTemplate } from '../CommonModalTemplate/CommonModalTemplate';
import { MovieForm } from '../MovieForm/MovieForm';
import { EditMenuProps } from '../../../types';

const formLegend: string = 'EDIT MOVIE';
const formFields: string[] = [
    'MOVIE ID',
    'TITLE',
    'RELEASE DATE',
    'MOVIE URL',
    'GENRE',
    'OVERVIEW',
    'RUNTIME'
];

export const EditModal: React.FC<EditMenuProps> = ({movieId, onClose}: EditMenuProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        onClose(event);
        event.stopPropagation();
    };

    return (
        <CommonModalTemplate onClose={closeHandler}>
            <MovieForm legend={formLegend}
                       movieId={movieId}
                       fields={formFields}/>
        </CommonModalTemplate>
    );
};