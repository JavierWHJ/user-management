import React from "react";
import Home from "./Home";

import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const { asFragment } = render(<Home />);

  expect(asFragment()).toMatchSnapshot();
});