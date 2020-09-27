import React from "react";
import UserContainer from "./UserContainer";

import { render } from "@testing-library/react";
import { UserData } from "../type";

const users = [
    {
      firstName: "Bob",
      lastName: "Doe",
      email: "bob.doe@gmail.com",
      dob: 785635200000,
      id: 3
    }
];

const addUser = (newUser: UserData) => {
}

const updateUser = (id: number, userToUpdate: UserData) => {
}

const deleteUser = (id: number) => {
}

const searchUser = (query: string) => {
};

it("matches snapshot", () => {
  const { asFragment } = render(<UserContainer users={users} searchUser={searchUser} addUser={addUser} updateUser={updateUser} deleteUser={deleteUser} />);

  expect(asFragment()).toMatchSnapshot();
});