import React, { forwardRef, useState, useImperativeHandle } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const ModalWindow = forwardRef((props, ref) => {
    const { btnName, children } = props;
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useImperativeHandle(ref, () => {
        return {
            onCloseModal: onCloseModal
        };
    });

    return (
        <div>
            <button className="btn" onClick={onOpenModal}>{btnName}</button>
            <Modal open={open} onClose={onCloseModal} center>
                {children}
            </Modal>
        </div>
    );
});

export default ModalWindow;
