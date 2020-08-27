import { ContextMenu } from '../modals/ContextMenu/ComtextMenu';
import { ModalPortal } from '../modals/ModalPortal';
import { MenuIcon } from './MenuIcon.styled';
import { StyledEditMenu } from './StyledEditMenu.styled';
import $ from 'jquery';

type ModalState = {
    isVisibleMenu: boolean;
    modalRoot: HTMLElement | null;
};

const menuItems: string[] = ['EDIT', 'DELETE'];

export class EditMenu extends React.PureComponent {
    state: ModalState;

    componentWillMount(): void {
        this.setState({
            isVisibleMenu: false,
            modalRoot: null
        });
    }

    toggleModal(event: React.MouseEvent): void {
        this.setState({
            isVisibleMenu: event.type === 'mouseleave' ? false : !this.state.isVisibleMenu,
            modalRoot: event.target
        });

        event.preventDefault();
    }

    renderModal(container: HTMLElement): JSX.Element {
        let modalRoot: HTMLElement = $(container).closest('li')[0];
        if (container) {
            return (
                <ModalPortal modalRoot={modalRoot}>
                    <ContextMenu menuItems={menuItems}/>
                </ModalPortal>
            );
        }
    }

    render(): JSX.Element {
        return (
            <StyledEditMenu className="hoverMenu">
                <MenuIcon onClick={this.toggleModal.bind(this)} onMouseLeave={this.toggleModal.bind(this)}>
                    {this.state.isVisibleMenu ? this.renderModal(this.state.modalRoot) : (<>&#8942;</>)}
                </MenuIcon>
            </StyledEditMenu>
        );
    }
}