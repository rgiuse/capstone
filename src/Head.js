import { createPortal } from 'react-dom';

function Head({children}){
    return(
        createPortal(children, document.head)
    );
}

export default Head;