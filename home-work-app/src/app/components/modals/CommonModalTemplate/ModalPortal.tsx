import ReactDOM from 'react-dom';
import { ReactNode, useEffect } from 'react';

type ModalPortalProps = {
    modalRoot: HTMLElement,
    children: ReactNode
};

export const ModalPortal: React.FC<ModalPortalProps> = ( props: ModalPortalProps ) => {
    const modalContainer: HTMLElement = document.createElement( 'div' );
    useEffect( (): () => void => {
        props.modalRoot.appendChild( modalContainer );

        return () => {
            props.modalRoot.appendChild( modalContainer );
        };
    }, [] );

    return ReactDOM.createPortal( props.children, modalContainer );
};
