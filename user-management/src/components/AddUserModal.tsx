import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { UserData } from '../type';
import { validateUserData } from '../utils';

interface Props {
    toggleModal: boolean,
    closeModal: () => void,
    addUser: (newUser: UserData) => void
}

const AddUserModal = (props: Props) => {
    const [validated, setValidated] = useState(false);
    const [userData, setUserData] = useState<UserData>({
        firstName: '',
        lastName: '',
        email: '',
        dob: ''
    });

    const { firstName, lastName, email, dob } = userData;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }

        setValidated(true);
        if(validateUserData(userData)){
            props.addUser(userData)
            setUserData({
                firstName: '',
                lastName: '',
                email: '',
                dob: ''
            })
            props.closeModal();
        }
    };
    
    const handleChange = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleClose = () => {
        setUserData({
            firstName: '',
            lastName: '',
            email: '',
            dob: ''
        })
        props.closeModal();
    }

    return (
        <>
            <Modal show={props.toggleModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
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
                        <Button variant="primary" type="submit">Add User</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default AddUserModal;
