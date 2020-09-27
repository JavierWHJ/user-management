import React from "react";
import DeleteUserModal from "./DeleteUserModal";

import { render } from "@testing-library/react";

const user = {
    firstName: "Bob",
    lastName: "Doe",
    email: "bob.doe@gmail.com",
    dob: 785635200000,
    id: 3
  };

const deleteUser = (id: number) => {
}

it("matches snapshot", () => {
  const { asFragment } = render(<DeleteUserModal user={user} toggleModal={true} closeModal={() => console.log()} deleteUser={deleteUser} />);

  expect(asFragment()).toMatchSnapshot();
});