import { EditForm, EditFormFieldset, EditFormLegend, Label, Input } from './EditFormStyleSet.styled';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { store } from '../../../redux/store';

type MovieFormProps = {
    legend: string,
    fields: string[],
    closeHandler: (event: React.MouseEvent) => void
};

export const MovieForm: React.FC<MovieFormProps> = (props: MovieFormProps) => {
    const closeHandler: React.MouseEventHandler = (event: React.MouseEvent): void => {
        props.closeHandler(event);
    };
    const save: React.MouseEventHandler = (event: React.MouseEvent): void => {
        store.dispatch({
            type: 'ADD_ITEM',
            payload: {
                // formData
            }
        });
        store.dispatch({
            type: 'initial'
        });
        props.closeHandler(event);
    };

    return (
        <EditForm>
            <EditFormFieldset>
                <EditFormLegend>{props.legend}</EditFormLegend>
                {props.fields.map((field: string): JSX.Element => (
                    <p key={field}>
                        <Label>{field}</Label>
                        <Input type="text" />
                    </p>
                ))}
                <ButtonPanel>
                    <Button buttonTheme="saveButton" onClick={save}>SAVE</Button>
                    <Button buttonTheme="cancelButton" onClick={closeHandler}>CANCEL</Button>
                </ButtonPanel>
            </EditFormFieldset>
        </EditForm>
    );
};