import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { User } from '../type';

interface Props {
    user: User,
    toggleModal: boolean,
    closeModal: () => void,
    deleteUser: (id: number) => void
}

const DeleteUserModal = (props: Props) => {

    const { id } = props.user;

    const handleClose = () => {
        props.closeModal();
    }

    const onClickDelete = () => {
        props.deleteUser(id);
        props.closeModal();
    }

    return (
        <Modal show={props.toggleModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete {props.user.firstName + ' ' + props.user.lastName}?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={onClickDelete}>Delete User</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteUserModal;
