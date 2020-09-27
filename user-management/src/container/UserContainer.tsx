import React, { useState, useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import AddUserModal from "../components/AddUserModal";
import UpdateUserModal from '../components/UpdateUserModal';
import DeleteUserModal from '../components/DeleteUserModal';
import SearchComponent from "../components/SearchComponent";
import UserComponent from "../components/UserComponent";
import { User, UserData } from "../type";

interface Props {
    users: User[];
    searchUser: (query: string) => void;
    addUser: (newUser: UserData) => void;
    updateUser: (id: number, userToUpdate: UserData) => void;
    deleteUser: (id: number) => void
}

const UserContainer = (props: Props) => {
    const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
    const [toggleUpdateModal, setToggleUpdateModal] = useState<boolean>(false);
    const [toggleDeleteModal, setToggleDeleteModal] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User>();

    const openAddModal = () => {
        setToggleAddModal(true);
    }

    const openUpdateModal = () => {
        setToggleUpdateModal(true);
    }

    const openDeleteModal = () => {
        setToggleDeleteModal(true);
    }

    const closeModal = () => {
        setToggleAddModal(false);
        setToggleUpdateModal(false);
        setToggleDeleteModal(false);
    }

    const onSelectUserUpdate = (user: User) => {
        setSelectedUser(user);
        openUpdateModal();
    }

    const onSelectUserDelete = (user: User) => {
        setSelectedUser(user);
        openDeleteModal();
    }

    return (
        <div>
            <div className="mt-4 d-flex justify-content-between">
                <h2>Users</h2>
                <Button onClick={openAddModal}>Add User</Button>
            </div>
            <SearchComponent searchUser={props.searchUser}/>
            {props.users && props.users.length !== 0 ? (
                <Table
                    striped
                    bordered
                    hover
                    responsive
                    style={{
                        marginTop: "20px",
                    }}
                >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users
                            ? props.users.map((user) => {
                                    return (
                                        <UserComponent
                                            key={user.id}
                                            user={user}
                                            onSelectUserUpdate={onSelectUserUpdate}
                                            onSelectUserDelete={onSelectUserDelete}
                                        />
                                    );
                            })
                            : ""}
                    </tbody>
                </Table>
            ) : (
                <Alert
                    variant="info"
                    style={{
                        marginTop: "20px",
                    }}
                >
                    {"There are no users."}
                </Alert>
            )}
            <AddUserModal toggleModal={toggleAddModal} closeModal={closeModal} addUser={props.addUser}/>
            {selectedUser ? <UpdateUserModal user={selectedUser} toggleModal={toggleUpdateModal} closeModal={closeModal} updateUser={props.updateUser}/> : ''}
            {selectedUser ? <DeleteUserModal user={selectedUser} toggleModal={toggleDeleteModal} closeModal={closeModal} deleteUser={props.deleteUser}/> : ''}
        </div>
    );
};

export default UserContainer;
