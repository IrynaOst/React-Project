import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Redirect } from 'react-router-dom';
import { HOME } from '../constants/navigations';

const ModalWindow = (props) => {
    const { btnName, children } = props;
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <button className="btn" onClick={onOpenModal}>{btnName}</button>
            <Modal open={open} onClose={onCloseModal} center>
                {open ? children : <Redirect to={HOME} />}
            </Modal>
        </div>
    );
};

export default ModalWindow;
