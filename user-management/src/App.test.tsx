import React from "react";
import App from "./App";

import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});