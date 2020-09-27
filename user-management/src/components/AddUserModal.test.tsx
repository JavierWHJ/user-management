import React from "react";
import AddUserModal from "./AddUserModal";

import { render } from "@testing-library/react";
import { UserData } from "../type";

const addUser = (newUser: UserData) => {
}

it("matches snapshot", () => {
  const { asFragment } = render(<AddUserModal toggleModal={true} closeModal={() => console.log()} addUser={addUser} />);

  expect(asFragment()).toMatchSnapshot();
});