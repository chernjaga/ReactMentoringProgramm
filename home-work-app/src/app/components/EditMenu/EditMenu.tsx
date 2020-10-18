import { useState } from 'react';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import { ContextMenu } from '../modals/ContextMenu/ContextMenu';
import { MenuIcon } from './MenuIcon.styled';

type ModalProps = {
    movieId: number;
    className: string;
    onMovieDelete: (id: number) => void;
};

enum CloseIconSize {
    small = 1,
}

const menuItems: string[] = ['EDIT', 'DELETE'];

const EditMenuComponent: React.FC<ModalProps> = ({
    className,
    movieId,
    onMovieDelete,
}: ModalProps) => {
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    const toggleModal: React.MouseEventHandler = (event?: React.MouseEvent) => {
        setIsVisibleMenu(!isVisibleMenu);
        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <div className={className}>
            {isVisibleMenu ? (
                <ContextMenu
                    menuItems={menuItems}
                    closeIconSize={CloseIconSize.small}
                    onMovieDelete={onMovieDelete}
                    movieId={movieId}
                    onCloseMenu={toggleModal}
                />
            ) : (
                <MenuIcon onClick={toggleModal} className="" />
            )}
        </div>
    );
};

export const EditMenu: StyledComponent<React.FC<ModalProps>, DefaultTheme> = styled(
    EditMenuComponent
)`
    display: none;
`;
