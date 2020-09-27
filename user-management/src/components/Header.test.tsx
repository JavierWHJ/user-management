import React from "react";
import Header from "./Header";

import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});