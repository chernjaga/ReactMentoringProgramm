import { StyledContextMenu } from './StyledContextMenu.styled';
import { StyledMenuItem } from './StyledMenuItem.styled';
import { CloseIcon } from './CloseIcon';
import { ModalPortal } from '../ModalPortal';
import { EditModal } from '../EditModal/EditModal';
import { CloseSymbol } from '../../CloseSymbol';

type MenuProps = {
    menuItems: string[],
    movieId: number,
    closeIconSize: number
};

type ContextMenuState = {
    isModalDisplayed: boolean,
    modalName: string | null
};

const modalRoot: HTMLElement = document.body;

export class ContextMenu extends React.PureComponent<MenuProps> {
    props: MenuProps;
    state: ContextMenuState;

    renderModal(modalType: string, id: number): JSX.Element {
        switch (modalType) {
            case 'EDIT': 
                return (
                    <ModalPortal modalRoot={modalRoot}>
                        <EditModal movieId={id}></EditModal>
                    </ModalPortal>
                );
            case 'DELETE':
                return (
                    <ModalPortal modalRoot={modalRoot}>
                        <EditModal movieId={id}></EditModal>
                    </ModalPortal>
                );
        }
    };

    componentWillMount(): void {
        this.setState({
            isModalDisplayed: false,
            modalName: null
        });
    }

    clickHandler(item: string, event: React.MouseEvent): void {
        if (item === 'CLOSE') {

            return;
        }
        this.setState({
            isModalDisplayed: true,
            modalName: item
        });
        event.preventDefault();
        event.stopPropagation();
    }

    render(): JSX.Element {
        return (
            <StyledContextMenu>
                <CloseIcon size={this.props.closeIconSize} onClick={this.clickHandler.bind(this, 'CLOSE')}>
                    <CloseSymbol/>
                </CloseIcon>
                <ul role="menu">
                    {this.props.menuItems.map((item: string) => (
                        <StyledMenuItem onClick={this.clickHandler.bind(this, item)} key={item}>
                            {item}
                            {
                                this.state.isModalDisplayed && this.state.modalName === item ?
                                    this.renderModal(item, this.props.movieId) : null
                            }
                        </StyledMenuItem>
                    ))}
                </ul>
            </StyledContextMenu>
        );
    }
}
