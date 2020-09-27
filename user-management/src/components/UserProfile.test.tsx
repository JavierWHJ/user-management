import React from "react";
import UserProfile from "./UserProfile";

import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const { asFragment } = render(<UserProfile firstName={"John"} lastName={"Doe"}/>);

  expect(asFragment()).toMatchSnapshot();
});