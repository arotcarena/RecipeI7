import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type Props = PropsWithChildren<{
    isOpen: boolean,
    onClose: () => void,
}>;

export const Modal = ({
    isOpen,
    onClose,
    children,
}: Props) => {
    if(!isOpen) {
        return '';
    }

    return (
        createPortal((
            <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-row justify-center items-center z-10" style={{backgroundColor: 'rgba(0, 0, 0, .7)'}}>
                <div className="relative p-4 rounded-lg" style={{width: '85vw', minHeight: '100px', maxHeight: '80vh', maxWidth: '500px', backgroundColor: '#FFF'}}>
                    <button style={{position: 'absolute', top: '10px', right: '15px'}} className="border border-gray-600 py-1 px-3 rounded-md" type="button" onClick={onClose}>X</button>
                    { children }
                </div>
            </div>
        ), document.body)
    );
}
