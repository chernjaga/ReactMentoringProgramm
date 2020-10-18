import { EditForm, EditFormFieldset, EditFormLegend, Label, Input } from './EditFormStyleSet.styled';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { MapDispatchToProps } from '../../../types';
import { addMovie } from '../../../redux/actions/addMovie';
import { connect } from 'react-redux';
import { editMovie } from '../../../redux/actions/editMovie';

interface MovieFormProps extends MapDispatchToProps {
    legend: string;
    fields: string[];
    movieId?: number;
    closeHandler?: (event: React.MouseEvent) => void;
}

const mapDispatchToProps: MapDispatchToProps = {
    add: addMovie,
    edit: editMovie
};

const MovieFormComponent: React.FC<MovieFormProps> = ({
    legend,
    fields,
    movieId,
    edit,
    closeHandler,
    add
}: MovieFormProps) => {
    const isEditForm: boolean = !!movieId;
    const cancel: React.MouseEventHandler = (event: React.MouseEvent): void => {
        closeHandler(event);
    };
    const save: React.MouseEventHandler = (event: React.MouseEvent): void => {
        if (isEditForm) {
            edit({
                title: 'AAAAAAAA',
                poster_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsuperlama.by%2Fposter-s-personagami-rik-i-morti-8212&psig=AOvVaw0x3jyvzaT9N7uKDmqPBygO&ust=1601909570594000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjG9KyYm-wCFQAAAAAdAAAAABAD',
                overview: 'asdmalkmadklsmdkldad',
                runtime: 666,
                id: movieId
            })
        } else {
            add({
                title: 'AAAAAAAA',
                poster_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsuperlama.by%2Fposter-s-personagami-rik-i-morti-8212&psig=AOvVaw0x3jyvzaT9N7uKDmqPBygO&ust=1601909570594000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjG9KyYm-wCFQAAAAAdAAAAABAD',
                overview: 'asdmalkmadklsmdkldad',
                runtime: 666,
                id: 111111
            });
        }
        closeHandler(event);
    };

    return (
        <EditForm>
            <EditFormFieldset>
                <EditFormLegend>{legend}</EditFormLegend>
                {fields.map((field: string): JSX.Element => (
                    <p key={field}>
                        <Label>{field}</Label>
                        <Input type="text" />
                    </p>
                ))}
                <ButtonPanel>
                    <Button buttonTheme="saveButton" onClick={save}>{ isEditForm? 'EDIT' : 'SAVE'}</Button>
                    <Button buttonTheme="cancelButton" onClick={cancel}>CANCEL</Button>
                </ButtonPanel>
            </EditFormFieldset>
        </EditForm>
    );
};

export const MovieForm: React.FC<MovieFormProps> = connect(
    (): {} => ({}),
    mapDispatchToProps
)(MovieFormComponent);