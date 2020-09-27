import React from "react";
import SearchComponent from "./SearchComponent";

import { render } from "@testing-library/react";


const searchUser = (query: string) => {
}

it("matches snapshot", () => {
  const { asFragment } = render(<SearchComponent searchUser={searchUser} />);

  expect(asFragment()).toMatchSnapshot();
});