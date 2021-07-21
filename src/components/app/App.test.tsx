import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders catch test page", () => {
  render(<App />);

  const header = screen.getByRole("banner");
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent("A front-end test of sorts");

  expect(document.querySelector(".catch-form")).toBeInTheDocument();
  expect(document.querySelector(".catch-spacer")).toBeInTheDocument();
  expect(document.querySelector(".catch-snippets")).toBeInTheDocument();
  expect(document.querySelector(".catch-gallery")).toBeInTheDocument();
  expect(document.querySelector(".catch-footer")).toBeInTheDocument();
});
