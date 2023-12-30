import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

function SelectButton() {
    const [open,setOpen] =useState(true);
    return (
        
        <Modal isOpen={open} toggle={() => setOpen(!open)}>
        <ModalHeader>
          Modal title
        </ModalHeader>
        <ModalBody>
          Modal body text goes here.
        </ModalBody>
      </Modal>
    )
}

export default SelectButton
