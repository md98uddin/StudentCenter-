import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Login from "../Login";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
