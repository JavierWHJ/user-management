import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button, Form, Modal } from 'react-bootstrap';
import { User, UserData } from '../type';
import { validateUserData } from '../utils';

interface Props {
    user: User;
    toggleModal: boolean,
    closeModal: () => void,
    updateUser: (id: number, userToUpdate: UserData) => void
}

const UpdateUserModal = (props: Props) => {

    const [validated, setValidated] = useState(false);
    const [userData, setUserData] = useState<UserData>({
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        email: props.user.email,
        dob: moment(new Date(props.user.dob)).format('YYYY-MM-DD')
    });

    useEffect(() => {
        const updateUser = {
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            email: props.user.email,
            dob: moment(new Date(props.user.dob)).format('YYYY-MM-DD')
        }
        setUserData(updateUser)
    }, [props.user])

    const { id } = props.user;
    const { firstName, lastName, email, dob } = userData;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
        if(validateUserData(userData)){
            props.updateUser(id, userData)
            props.closeModal();
        }
    };
    
    const handleChange = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        props.closeModal();
    }

    return (
        <>
            <Modal show={props.toggleModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Form className="form-horizontal" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={e => handleChange(e)}
                                placeholder="First name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a first name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={e => handleChange(e)}
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a last name.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => handleChange(e)}
                                placeholder="Email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter an email.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                required
                                name="dob"
                                type="date"
                                value={dob}
                                onChange={e => handleChange(e)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a date of birth.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                        <Button variant="primary" type="submit">Update User</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default UpdateUserModal;
