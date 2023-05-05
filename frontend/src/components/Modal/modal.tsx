import React, { ReactNode } from "react";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

function Modal(props: ModalType){

    return (
        <>
            {props.isOpen && (
                <div className="modal-overlay" onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className="modal-box">
                        {props.children}
                            <i onClick={props.toggle} className="closing-modal-icon fab fa-x "></i>
                    </div>
                </div>
            )

            }
        </>
    )
}

export default Modal