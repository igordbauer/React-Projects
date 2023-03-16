import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const helloElement = screen.getByText("Hello world!");
    expect(helloElement).toBeInTheDocument();
  });
  test("renders initial text if the button is not clicked", () => {
    render(<Greeting />);

    const exists = screen.getByText("It's good to see you!");
    expect(exists).toBeInTheDocument();
  });
  test("renders text if the button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const output = screen.getByText("Changed!");
    expect(output).toBeInTheDocument();
  });
  test("not renders first text after button was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const output = screen.queryByText("It's good to see you!");
    expect(output).toBeNull();
  });
});
