import React from "react";
import Sidebar from "./Sidebar";

import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const { asFragment } = render(<Sidebar />);

  expect(asFragment()).toMatchSnapshot();
});