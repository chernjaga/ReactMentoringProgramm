import { CommonModalTemplate } from '../CommonModalTemplate/CommonModalTemplate';
import { MovieForm } from '../MovieForm/MovieForm';
import { EditMenuProps, FormField } from '../../../types';

const formLegend: string = 'ADD MOVIE';

const formFields: FormField[] = [
    {
        label: 'TITLE',
        movieField: 'title',
    },
    {
        label: 'RELEASE DATE',
        movieField: 'release_date',
    },
    {
        label: 'POSTER URL',
        movieField: 'poster_path',
    },
    {
        label: 'GENRE',
        movieField: 'genres',
    },
    {
        label: 'OVERVIEW',
        movieField: 'overview',
    },
    {
        label: 'RUNTIME',
        movieField: 'runtime',
    },
];

export const AddMovieModal: React.FC<EditMenuProps> = (props: EditMenuProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        props.onClose(event);
        event.stopPropagation();
    };

    return (
        <CommonModalTemplate onClose={closeHandler}>
            <MovieForm legend={formLegend} closeHandler={closeHandler} fields={formFields} />
        </CommonModalTemplate>
    );
};
