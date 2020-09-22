import { EditForm, EditFormFieldset, EditFormLegend, Label, Input } from './EditFormStyleSet.styled';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';

type MovieFormProps = {
    legend: string,
    fields: string[]
};

export const MovieForm: React.FC<MovieFormProps> = (props: MovieFormProps) => (
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
                <Button buttonTheme="saveButton">SAVE</Button>
                <Button buttonTheme="cancelButton">CANCEL</Button>
            </ButtonPanel>
        </EditFormFieldset>
    </EditForm>
);