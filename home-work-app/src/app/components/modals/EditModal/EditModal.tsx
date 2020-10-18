import { CommonModalTemplate } from '../CommonModalTemplate/CommonModalTemplate';
import { MovieForm } from '../MovieForm/MovieForm';
import { EditMenuProps, FormField } from '../../../types';

enum FormLegend {
    EDIT = 'EDIT MOVIE',
}

const formFields: FormField[] = [
    {
        label: 'MOVIE ID',
        movieField: 'id',
    },
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

export const EditModal: React.FC<EditMenuProps> = ({ movieId, onClose }: EditMenuProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
        onClose(event);
        event.stopPropagation();
    };

    return (
        <CommonModalTemplate onClose={closeHandler}>
            <MovieForm
                legend={FormLegend.EDIT}
                movieId={movieId}
                fields={formFields}
                closeHandler={closeHandler}
            />
        </CommonModalTemplate>
    );
};
