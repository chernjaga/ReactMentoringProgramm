import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../configs/style.configs';
import { ContextMenu } from './modals/comtextMenu';
import { ModalPortal } from './modals/modalPortal';

type ModalState = {
    isVisibleMenu: boolean;
    modalRoot: HTMLElement | null;
};

const menuItems = ['EDIT', 'DELETE'];

const StyledEditMenu: StyledComponent<'div', {}> = styled.div.attrs({
    className: 'hoverMenu'
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;
const MenuIcon: StyledComponent<'div', {}> = styled.div`
    position: absolute;
    border-radius: 50%;
    top: 15px;
    width: 32px;
    height: 32px;
    right: 7%;
    display: flex;
    font-weight: 900;
    line-height: 16px;
    font-size: 16px;
    justify-content: center;
    align-items: center;
    background-color: ${stylesConfig.colors.black};
    &:hover {
        background-color: ${stylesConfig.colors.pink};
    }
`;

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
        if (container) {
            return (
                <ModalPortal modalRoot={container}>
                    <ContextMenu menuItems={menuItems}/>
                </ModalPortal>
            );
        }
    }

    render(): JSX.Element {
        return (
            <StyledEditMenu>
                <MenuIcon onClick={this.toggleModal.bind(this)} onMouseLeave={this.toggleModal.bind(this)}>
                    {this.state.isVisibleMenu ? this.renderModal(this.state.modalRoot) : (<>&#8942;</>)}
                </MenuIcon>
            </StyledEditMenu>
        );
    }
};