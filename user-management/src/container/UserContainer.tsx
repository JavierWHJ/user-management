import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import AddUserModal from "../components/AddUserModal";
import SearchComponent from "../components/SearchComponent";
import UserComponent from "../components/UserComponent";
import { User, UserData } from "../type";

interface Props {
    users: User[];
    searchUser: (query: string) => void;
    addUser: (newUser: UserData) => void;
    updateUser: (id: number, userToUpdate: User) => void;
    deleteUser: (id: number) => void
}

const UserContainer = (props: Props) => {
    const [toggleAddModal, setToggleAddModal] = useState<boolean>(false);
    const [toggleEditModal, setToggleEditModal] = useState<boolean>(false);
    const [toggleDeleteModal, setToggleDeleteModal] = useState<boolean>(false);

    const openAddModal = () => {
        setToggleAddModal(true);
    }

    const openEditModal = () => {
        setToggleEditModal(true);
    }

    const openDeleteModal = () => {
        setToggleDeleteModal(true);
    }

    const closeModal = () => {
        setToggleAddModal(false);
        setToggleEditModal(false);
        setToggleDeleteModal(false);
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
        </div>
    );
};

export default UserContainer;
