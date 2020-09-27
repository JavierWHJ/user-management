import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { UserData } from '../type';
import { validateUserData } from '../utils';

interface Props {
    toggleModal: boolean,
    closeModal: () => void,
    updateUser: (id: number, userToUpdate: UserData) => void
}

const UpdateUserModal = (props: Props) => {

    const [userData, setUserData] = useState<UserData>();

    return (
        <div>
            
        </div>
    );
}

export default UpdateUserModal;
