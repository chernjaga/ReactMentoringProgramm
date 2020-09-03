import { StyledLink } from './StyledLink.styled';
import { AddMovieModal } from '../../../../components/modals/AddMovieModal/AddMovieModal';
import { ModalPortal } from '../../../../components/modals/CommonModalTemplate/ModalPortal';
import { useState } from 'react';

const modalRoot: HTMLElement = document.body;

export const AddMovieLink: React.FC = () => {
    const [isModalOpen, toggle] = useState(false);
    const clickHandler: () => void = () => toggle(!isModalOpen);

    return (
        <>
            <StyledLink onClick={clickHandler}>
                + ADD MOVIE
            </StyledLink>
            {isModalOpen && (
                <ModalPortal modalRoot={modalRoot}>
                    <AddMovieModal onClose={clickHandler}/>
                </ModalPortal>
            )}
        </>
    );
};
