import { ContextMenu } from '../modals/ContextMenu/ContextMenu';
import { MenuIcon } from './MenuIcon.styled';
import { StyledEditMenu } from './StyledEditMenu.styled';
import $ from 'jquery';
import { ModalPortal } from '../modals/CommonModalTemplate/ModalPortal';
import { useState, useCallback } from 'react';

type ModalProps = {
    movieId: number;
};

const menuItems: string[] = ['EDIT', 'DELETE'];
const closeIconSize: number = 1;

export const EditMenu: React.FC<ModalProps> = (props: ModalProps) => {
    const [state, setState] = useState({
        isVisibleMenu: false,
        modalRoot: null
    });

    const toggleModal: React.MouseEventHandler = (event?: React.MouseEvent) => {
        setState({
            isVisibleMenu: !state.isVisibleMenu,
            modalRoot: event.target
        });
        event.stopPropagation();
        event.preventDefault();
    };

    const renderModal: (container: HTMLElement) => JSX.Element = useCallback((container: HTMLElement): JSX.Element => {
        const modalRoot: HTMLElement = $(container).closest('li')[0];
        if (container) {
            return (
                <ModalPortal modalRoot={modalRoot}>
                    <ContextMenu menuItems={menuItems}
                                 closeIconSize={closeIconSize}
                                 movieId={props.movieId}
                                 onCloseMenu={toggleModal}/>
                </ModalPortal>
            );
        }
    }, []);

    return (
        <StyledEditMenu className="hoverMenu">
            <MenuIcon onClick={toggleModal}>
                {state.isVisibleMenu ? renderModal(state.modalRoot) : (<>&#8942;</>)}
            </MenuIcon>
        </StyledEditMenu>
    );
};
