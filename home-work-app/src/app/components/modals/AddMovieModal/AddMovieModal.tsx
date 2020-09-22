import { CommonModalTemplate } from '../CommonModalTemplate/CommonModalTemplate';
import { MovieForm } from '../MovieForm/MovieForm';
import { EditMenuProps } from '../../../types';

const formLegend: string = 'ADD MOVIE';
const formFields: string[] = [
    'TITLE',
    'RELEASE DATE',
    'MOVIE URL',
    'GENRE',
    'OVERVIEW',
    'RUNTIME'
];

export const AddMovieModal: React.FC<EditMenuProps> = (props: EditMenuProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        props.onClose(event);
        event.stopPropagation();
    };

    return (
        <CommonModalTemplate onClose={closeHandler}>
            <MovieForm legend={formLegend}
                       fields={formFields}/>
        </CommonModalTemplate>
    );
};