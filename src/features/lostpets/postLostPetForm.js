import { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, FormGroup, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const PostLostPetForm = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button color="primary" onClick={() => setModalOpen(true)}>
                <FontAwesomeIcon className="fa" icon={faStickyNote} /> Post a Lost Pet
            </Button>

            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Post a Lost Pet
                </ModalHeader>

                <ModalBody>

                </ModalBody>
            </Modal>
        </>

    );
    
};

export default PostLostPetForm;