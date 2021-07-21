import { render, screen, fireEvent } from "@testing-library/react";
import FormPage from "../formPage";

describe("FormPage component test", () => {
  test("renders FormPage", () => {
    render(<FormPage />);

    expect(document.querySelector(".catch-form")).toBeInTheDocument();
    const formTitle = screen.getByText(/Form title/i);
    expect(formTitle).toBeInTheDocument();
    const inputElements = screen.getAllByRole("textbox") as HTMLInputElement[];
    expect(inputElements[0]).toBeInTheDocument();
    expect(inputElements[1]).toBeInTheDocument();
    expect(inputElements[2]).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /submit/i,
      })
    ).toBeInTheDocument();
  });
  test("button onClick test", () => {
    console.log = jest.fn();
    render(<FormPage />);
    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);
    expect(console.log).toHaveBeenCalledWith("Form submitted!");
  });
});
