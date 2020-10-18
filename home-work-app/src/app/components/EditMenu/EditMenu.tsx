import { useState } from "react";
import styled, { StyledComponent, DefaultTheme } from "styled-components";
import { ContextMenu } from "../modals/ContextMenu/ContextMenu";
import { MenuIcon } from "./MenuIcon.styled";

type ModalProps = {
    movieId: number;
    className: string;
    onMovieDelete: () => void;
};

const menuItems: string[] = ["EDIT", "DELETE"];
const closeIconSize = 1;

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
                    closeIconSize={closeIconSize}
                    onMovieDelete={onMovieDelete}
                    movieId={movieId}
                    onCloseMenu={toggleModal}
                />
            ) : (
                <MenuIcon onClick={toggleModal} />
            )}
        </div>
    );
};

export const EditMenu: StyledComponent<React.FC<ModalProps>, DefaultTheme> = styled(
    EditMenuComponent
)`
    display: none;
`;
