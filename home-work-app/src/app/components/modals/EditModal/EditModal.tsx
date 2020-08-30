import { ModalWindowWrapper } from '../ModalWindowWrapper';
import { EditForm, EditFormFieldset, EditFormLegend, Label, Input, Button } from './EditFormStyleSet.styled';
import { StyledEditModal } from './StyledEditModal.styled';
import { ModalHeader } from './ModalHeader.styled';
import { CloseSymbol } from '../../CloseSymbol';
import { stylesConfig } from '../../../configs/style.configs';

type EditMenuProps = {
    movieId: number
};

export class EditModal extends React.PureComponent<EditMenuProps> {
    props: EditMenuProps;

    constructor(props: EditMenuProps) {
        super(props);
        this.props = props;
    }

    render(): JSX.Element {
        return (
            <ModalWindowWrapper>
                <StyledEditModal>
                    <ModalHeader>
                        <CloseSymbol/>
                    </ModalHeader>
                    <EditForm>
                        <EditFormFieldset>
                            <EditFormLegend>EDIT MOVIE</EditFormLegend>
                            <p>
                                <Label>MOVIE ID</Label>
                                <Input type="text"/>
                            </p>
                            <p>
                                <Label>TITLE</Label>
                                <Input type="text"/>
                            </p>
                            <p>
                                <Label>RELEASE DATE</Label>
                                <Input type="text"/>
                            </p>
                            <p>
                                <Label>MOVIE URL</Label>
                                <Input type="text"/>
                            </p>
                            <p>
                                <Label>GENRE</Label>
                                <Input type="text"/>
                            </p>
                            <p>
                                <Label>OVERVIEW</Label>
                                <Input type="text"/>
                            </p>
                            <p>
                                <Label>RUNTIME</Label>
                                <Input type="text"/>
                            </p>
                            <div>
                                <Button background={stylesConfig.colors.grayTint2}
                                        color={stylesConfig.colors.pink}
                                        border={stylesConfig.colors.pink}>CANCEL</Button>
                                <Button color={stylesConfig.colors.white}
                                        background={stylesConfig.colors.pink}
                                        border={stylesConfig.colors.pink}>SAVE</Button>
                            </div>
                        </EditFormFieldset>
                    </EditForm>
                </StyledEditModal>
            </ModalWindowWrapper>
        );
    }
}