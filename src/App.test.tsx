import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App", () => {
  render(<App />);
  const title = screen.getByRole("heading", { level: 1 });
  expect(title).toHaveTextContent("Weather app");
});
