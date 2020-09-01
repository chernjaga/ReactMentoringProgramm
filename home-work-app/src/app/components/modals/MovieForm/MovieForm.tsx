import { EditForm, EditFormFieldset, EditFormLegend, Label, Input } from './EditFormStyleSet.styled';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { stylesConfig } from '../../../configs/style.configs';

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
                    <Input type="text"/>
                </p>
            ))}
            <ButtonPanel>
                <Button color={stylesConfig.colors.white}
                        background={stylesConfig.colors.pink}
                        border={stylesConfig.colors.pink}>SAVE</Button>
                <Button background={stylesConfig.colors.grayTint2}
                        color={stylesConfig.colors.pink}
                        border={stylesConfig.colors.pink}>CANCEL</Button>
            </ButtonPanel>
        </EditFormFieldset>
    </EditForm>
);