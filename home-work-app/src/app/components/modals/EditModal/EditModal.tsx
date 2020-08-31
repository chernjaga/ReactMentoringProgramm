import { ModalWindowWrapper } from '../ModalWindowWrapper';
import { EditForm, EditFormFieldset, EditFormLegend, Label, Input, Button, ButtonPanel } from './EditFormStyleSet.styled';
import { StyledModal } from '../StyledModal.styled';
import { ModalHeader } from '../ModalHeader.styled';
import { CloseSymbol } from '../CloseSymbol';
import { stylesConfig } from '../../../configs/style.configs';

type EditMenuProps = {
    movieId: number,
    onClose: (event: React.MouseEvent) => void
};

export class EditModal extends React.PureComponent<EditMenuProps> {
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
            <ModalWindowWrapper>
                <StyledModal>
                    <ModalHeader>
                        <span onClick={this.closeHandler.bind(this)}>
                            <CloseSymbol/>
                        </span>
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
                </StyledModal>
            </ModalWindowWrapper>
        );
    }
}