import { useState } from 'react';
import { StyledContextMenu } from './StyledContextMenu.styled';
import { ContextMenuItem } from './ContextMenuItem.styled';
import { CloseIcon } from './CloseIcon.styled';
import { EditModal } from '../EditModal/EditModal';
import { CloseSymbol } from '../CommonModalTemplate/CloseSymbol';
import { DeleteModal } from '../DeleteModal/DeleteModal';
import { ModalPortal } from '../CommonModalTemplate/ModalPortal';

type MenuProps = {
    menuItems: string[];
    movieId: number;
    onMovieDelete: (id: number) => void;
    closeIconSize: number;
    onCloseMenu: (event: React.MouseEvent) => void;
};

type RenderModal = (modalType: string, movieId: number) => JSX.Element;

type CustomClickHandler = (item: string, event: React.MouseEvent) => void;

export const ContextMenu: React.FC<MenuProps> = ({
    menuItems,
    movieId,
    onMovieDelete,
    closeIconSize,
    onCloseMenu,
}: MenuProps) => {
    const modalRoot: HTMLElement = document.body;

    const [state, setState] = useState({
        isModalDisplayed: false,
        modalName: null,
    });

    const closeMenu: React.MouseEventHandler = (event: React.MouseEvent) => {
        onCloseMenu(event);
        event.stopPropagation();
    };

    const closeModal: React.MouseEventHandler = (event: React.MouseEvent) => {
        setState({
            isModalDisplayed: false,
            modalName: null,
        });
        closeMenu(event);
    };

    const clickHandler: CustomClickHandler = (item: string, event: React.MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        setState({
            isModalDisplayed: true,
            modalName: item,
        });
    };

    const renderModal: RenderModal = (modalType: string) => {
        switch (modalType) {
            case 'EDIT':
                return (
                    <ModalPortal modalRoot={modalRoot}>
                        <EditModal movieId={movieId} onClose={closeModal} />
                    </ModalPortal>
                );
            default:
                return (
                    <ModalPortal modalRoot={modalRoot}>
                        <DeleteModal
                            movieId={movieId}
                            onClose={closeModal}
                            onMovieDelete={onMovieDelete}
                        />
                    </ModalPortal>
                );
        }
    };

    return (
        <StyledContextMenu>
            <CloseIcon size={closeIconSize}>
                <CloseSymbol onClick={closeMenu} />
            </CloseIcon>
            <ul>
                {menuItems.map((item: string) => (
                    // eslint-disable-next-line react/jsx-no-bind
                    <ContextMenuItem onClick={clickHandler.bind(this, item)} key={item}>
                        {item}
                    </ContextMenuItem>
                ))}
            </ul>
            {state.isModalDisplayed && renderModal(state.modalName, movieId)}
        </StyledContextMenu>
    );
};
