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
export class AddMovieModal extends React.PureComponent<EditMenuProps> {
    props: EditMenuProps;

    constructor(props: EditMenuProps) {
        super(props);
        this.props = props;
    }

    closeHandler(event: React.MouseEvent): void {
        this.props.onClose(event);
        event.stopPropagation();
    }

    render(): JSX.Element {
        return (
            <CommonModalTemplate onClose={this.closeHandler.bind(this)}>
                <MovieForm legend={formLegend} 
                           fields={formFields}/>
            </CommonModalTemplate>
        );
    }
}