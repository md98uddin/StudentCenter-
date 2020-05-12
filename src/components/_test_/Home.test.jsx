import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import HomePage from "../Home";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
