import { ContextMenu } from '../modals/ContextMenu/ContextMenu';
import { ModalPortal } from '../modals/ModalPortal';
import { MenuIcon } from './MenuIcon.styled';
import { StyledEditMenu } from './StyledEditMenu.styled';
import $ from 'jquery';

type ModalState = {
    isVisibleMenu: boolean;
    modalRoot: HTMLElement | null;
};
type ModalProps = {
    movieId: number;
};

const menuItems: string[] = ['EDIT', 'DELETE'];
const closeIconSize: number = 1;

export class EditMenu extends React.PureComponent {
    state: ModalState;
    props: ModalProps;

    componentWillMount(): void {
        this.setState({
            isVisibleMenu: false,
            modalRoot: null
        });
    }

    toggleModal(event?: React.MouseEvent): void {
        this.setState({
            isVisibleMenu: !this.state.isVisibleMenu,
            modalRoot: event.target
        });
        event.stopPropagation();
        event.preventDefault();
    }

    closeContextMenu(event: React.MouseEvent): void {
        this.toggleModal(event);
        event.stopPropagation();
        event.preventDefault();
    }
    renderModal(container: HTMLElement): JSX.Element {
        const modalRoot: HTMLElement = $(container).closest('li')[0];
        if (container) {
            return (
                <ModalPortal modalRoot={modalRoot}>
                    <ContextMenu menuItems={menuItems}
                                 closeIconSize={closeIconSize}
                                 movieId={this.props.movieId}
                                 onCloseMenu={this.closeContextMenu.bind(this)}/>
                </ModalPortal>
            );
        }
    }

    render(): JSX.Element {
        return (
            <StyledEditMenu className="hoverMenu">
                <MenuIcon onClick={this.toggleModal.bind(this)}>
                    {this.state.isVisibleMenu ? this.renderModal(this.state.modalRoot) : (<>&#8942;</>)}
                </MenuIcon>
            </StyledEditMenu>
        );
    }
}