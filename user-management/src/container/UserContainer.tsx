import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import SearchComponent from "../components/SearchComponent";
import UserComponent from "../components/UserComponent";
import { User } from "../type";

interface Props {
    users: User[] | undefined;
}

const UserContainer = (props: Props) => {
    return (
        <div>
            <div className="mt-4 d-flex justify-content-between">
                <h2>Users</h2>
                <Button>Add User</Button>
            </div>
            <SearchComponent />
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
                    {"There are no users created yet."}
                </Alert>
            )}
        </div>
    );
};

export default UserContainer;
