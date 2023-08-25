import React from 'react'

const Modal = ({ id, children }) => {
    return (
        // === btn action => <button className="btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button>
        <dialog id={id} className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
                {children}
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default Modal