import { StyledContextMenu } from './StyledContextMenu.styled';
import { ContextMenuItem } from './ContextMenuItem.styled';
import { CloseIcon } from './CloseIcon.styled';
import { EditModal } from '../EditModal/EditModal';
import { CloseSymbol } from '../CommonModalTemplate/CloseSymbol';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { ModalPortal } from '../CommonModalTemplate/ModalPortal';

type MenuProps = {
    menuItems: string[],
    movieId: number,
    closeIconSize: number,
    onCloseMenu: (event: React.MouseEvent) => void
};

type ContextMenuState = {
    isModalDisplayed: boolean,
    modalName: string | null
};

const modalRoot: HTMLElement = document.body;

export class ContextMenu extends React.PureComponent<MenuProps, ContextMenuState> {
    constructor(props: MenuProps) {
        super(props);
        this.state = {
            isModalDisplayed: false,
            modalName: null
        };
    }

    closeModal(event: React.MouseEvent): void {
        this.setState({
            isModalDisplayed: false,
            modalName: null
        });
        this.closeMenu(event);
    }

    closeMenu(event: React.MouseEvent): void {
        this.props.onCloseMenu(event);
        event.stopPropagation();
    }

    renderModal(modalType: string, id: number): JSX.Element {
        switch (modalType) {
            case 'EDIT':
                return (
                    <ModalPortal modalRoot={modalRoot}>
                        <EditModal movieId={id} onClose={this.closeModal.bind(this)}></EditModal>
                    </ModalPortal>
                );
            case 'DELETE':
                return (
                    <ModalPortal modalRoot={modalRoot}>
                        <DeleteModal movieId={id} onClose={this.closeModal.bind(this)}></DeleteModal>
                    </ModalPortal>
                );
        }
    }

    clickHandler(item: string, event: React.MouseEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            isModalDisplayed: true,
            modalName: item
        });
    }

    render(): JSX.Element {
        return (
            <StyledContextMenu>
                <CloseIcon size={this.props.closeIconSize} onClick={this.closeMenu.bind(this)}>
                    <CloseSymbol/>
                </CloseIcon>
                <ul role="menu">
                    {this.props.menuItems.map((item: string) => (
                        <ContextMenuItem onClick={this.clickHandler.bind(this, item)} key={item} role="menuItem">
                            {item}
                        </ContextMenuItem>
                    ))}
                </ul>
                {
                    this.state.isModalDisplayed && this.renderModal(this.state.modalName, this.props.movieId)
                }
            </StyledContextMenu>
        );
    }
}
