import React, { useState } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { UserData } from '../type';

const AddUserModal = (props: any) => {

    const [userData, setUserData] = useState<UserData>({
        firstName: '',
        lastName: '',
        email: '',
        dob: ''
    });

    const { firstName, lastName, email, dob } = userData;

    const handleCreate = (e: any) => {
        e.preventDefault();
      };
    
      const handleChange = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

    return (
        <div>
            <Modal show={props.toggleModal} onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <form className="form-horizontal" onSubmit={props.handleSubmit}>
                    <Modal.Body>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="firstName"
                            placeholder="First name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                placeholder="Email"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                required
                                name="dob"
                                type="date"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>      
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.closeModal}>Close</Button>
                        <Button variant="primary">Add User</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default AddUserModal;
