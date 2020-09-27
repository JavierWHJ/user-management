import React from "react";
import UpdateUserModal from "./UpdateUserModal";

import { render } from "@testing-library/react";
import { UserData } from "../type";

const user = {
    firstName: "Bob",
    lastName: "Doe",
    email: "bob.doe@gmail.com",
    dob: 785635200000,
    id: 3
  };

const updateUser = (id: number, userToUpdate: UserData) => {
}

it("matches snapshot", () => {
  const { asFragment } = render(<UpdateUserModal user={user} toggleModal={true} closeModal={() => console.log()} updateUser={updateUser} />);

  expect(asFragment()).toMatchSnapshot();
});