import React from "react";
import { Alert } from "react-bootstrap";
import { Table } from "react-bootstrap";
import SearchComponent from "../components/SearchComponent";
import UserComponent from "../components/UserComponent";
import { Users } from "../type";

interface Props {
    users: Users[] | undefined;
}

const UserContainer = (props: Props) => {
    return (
        <div>
            <SearchComponent />
            {props.users && props.users.length !== 0 ? (
                <Table
                    striped
                    bordered
                    hover
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
