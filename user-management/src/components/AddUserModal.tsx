import React, { useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { UserData } from '../type';
import { ErrorMsg, validateUserData } from '../utils';

const AddUserModal = (props: any) => {

    const [userData, setUserData] = useState<UserData>({
        firstName: '',
        lastName: '',
        email: '',
        dob: ''
    });

    const { firstName, lastName, email, dob } = userData;

    const handleCreate = () => {
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
                <form className="form-horizontal">
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
                            {!firstName && <ErrorMsg warning='empty' item='First name' />}
                            {firstName && !/^[a-zA-Z]+$/.test(firstName) && (
                            <ErrorMsg warning='invalid' item='First name' />
                            )}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                            {!lastName && <ErrorMsg warning='empty' item='Last name' />}
                            {lastName && !/^[a-zA-Z]+$/.test(lastName) && (
                            <ErrorMsg warning='invalid' item='Last name' />
                            )}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                            {!email && <ErrorMsg warning='empty' item='Email' />}
                            {email && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) && (
                            <ErrorMsg warning='invalid' item='Email' />
                            )}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                            {!dob && <ErrorMsg warning='empty' item='Date of Birth' />}
                            {dob && !/^\d{4}[./-]\d{2}[./-]\d{2}$/.test(dob) && (
                            <ErrorMsg warning='invalid' item='Date of Birth' />
                            )}
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>      
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                        <Button variant="primary" onClick={handleCreate}>Add User</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default AddUserModal;
