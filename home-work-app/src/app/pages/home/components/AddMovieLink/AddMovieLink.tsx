import { StyledLink } from './StyledLink.styled';
import { AddMovieModal } from '../../../../components/modals/AddMovieModal/AddMovieModal';
import { ModalPortal } from '../../../../components/modals/CommonModalTemplate/ModalPortal';

type AddMovieLinkState = {
    isModalOpen: boolean;
};

const modalRoot: HTMLElement = document.body;

export class AddMovieLink extends React.PureComponent {
    state: AddMovieLinkState;

    constructor(props: {}) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }

    toggleModal(event: React.MouseEvent): void {
        event.stopPropagation();
        event.preventDefault();
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(): JSX.Element {
        return (
            <>
                <StyledLink onClick={this.toggleModal.bind(this)}>
                    + ADD MOVIE
                </StyledLink>
                {this.state.isModalOpen ? (
                    <ModalPortal modalRoot={modalRoot}>
                        <AddMovieModal onClose={this.toggleModal.bind(this)}/>
                    </ModalPortal>
                ) : null}
            </>

        );
    }
}