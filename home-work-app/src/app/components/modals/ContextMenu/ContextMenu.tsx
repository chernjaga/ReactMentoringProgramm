import { StyledContextMenu } from './StyledContextMenu.styled';
import { ContextMenuItem } from './ContextMenuItem.styled';
import { CloseIcon } from './CloseIcon.styled';
import { EditModal } from '../EditModal/EditModal';
import { CloseSymbol } from '../CommonModalTemplate/CloseSymbol';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { ModalPortal } from '../CommonModalTemplate/ModalPortal';
import { useState } from 'react';

type MenuProps = {
    menuItems: string[],
    movieId: number,
    onMovieDelete: () => void,
    closeIconSize: number,
    onCloseMenu: (event: React.MouseEvent) => void
};

type RenderModal = (modalType: string, movieId: number) => JSX.Element;

type CustomClickHandler = (item: string, event: React.MouseEvent) => void;

export const ContextMenu: React.FC<MenuProps> = (props: MenuProps) => {
    const modalRoot: HTMLElement = document.body;

    const [state, setState] = useState({
        isModalDisplayed: false,
        modalName: null
    });

    const closeModal: React.MouseEventHandler = (event: React.MouseEvent) => {
        setState({
            isModalDisplayed: false,
            modalName: null
        });
        closeMenu(event);
    };

    const closeMenu: React.MouseEventHandler = (event: React.MouseEvent) => {
        props.onCloseMenu(event);
        event.stopPropagation();
    };

    const clickHandler: CustomClickHandler = (item: string, event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setState({
            isModalDisplayed: true,
            modalName: item
        });
    };

    const renderModal: RenderModal = (modalType: string, movieId: number) => {
        switch (modalType) {
            case 'EDIT':
                return (
                    <ModalPortal modalRoot={modalRoot}>
                        <EditModal movieId={movieId} onClose={closeModal} />
                    </ModalPortal>
                );
            case 'DELETE':
                return (
                    <ModalPortal modalRoot={modalRoot}>
                        <DeleteModal movieId={movieId} onClose={closeModal} onMovieDelete={props.onMovieDelete}/>
                    </ModalPortal>
                );
        }
    };

    return (
        <StyledContextMenu>
            <CloseIcon size={props.closeIconSize}>
                <CloseSymbol onClick={closeMenu} />
            </CloseIcon>
            <ul role="menu">
                {props.menuItems.map((item: string) => (
                    <ContextMenuItem
                        onClick={clickHandler.bind(this, item)}
                        key={item}
                        role="menuItem">
                        {item}
                    </ContextMenuItem>
                ))}
            </ul>
            {
                state.isModalDisplayed && renderModal(state.modalName, props.movieId)
            }
        </StyledContextMenu>
    );
};