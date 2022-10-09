import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import Greeting from "./Greeting";

// test by group

describe("Greeting component", () => {
    test("render test greeting", () => {
        // use 3A's
        // Arrange
        render(<Greeting />);
        // Act

        // Assert
        const helloWorldElement = screen.getByText("Hello world!");
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("render greeting text default", () => {
        render(<Greeting />);
        const greetingTextDefaultElement = screen.getByText("good to see you", {
            exact: false,
        });
        expect(greetingTextDefaultElement).toBeInTheDocument();
    });
    // test with button click
    test("render greeting text new", () => {
        // arrange
        render(<Greeting />);
        // act
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        //assert
        const greetingNewText = screen.getByText("Changed!");
        expect(greetingNewText).toBeInTheDocument();
    });

    test("render greeting default not in dom", () => {
        render(<Greeting />);

        // Act
        const btElement = screen.getByRole("button");
        userEvent.click(btElement);

        // Assert
        const greetingDefaultText = screen.queryByText("good to see you", {
            exact: false,
        });
        expect(greetingDefaultText).toBeNull();
    });
});
