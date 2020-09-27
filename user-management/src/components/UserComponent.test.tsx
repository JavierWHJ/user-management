import React from "react";
import UserComponent from "./UserComponent";

import { render } from "@testing-library/react";

const user = {
    firstName: "Bob",
    lastName: "Doe",
    email: "bob.doe@gmail.com",
    dob: 785635200000,
    id: 3
  };

it("matches snapshot", () => {
  const { asFragment } = render(<UserComponent user={user} onSelectUserDelete={() => console.log()} onSelectUserUpdate={() => console.log()} />);

  expect(asFragment()).toMatchSnapshot();
});