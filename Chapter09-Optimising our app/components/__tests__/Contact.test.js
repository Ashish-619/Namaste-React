//Unit Testing
import Contact from "../contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//"test" and "it" are same. "describe" is used to group all test cases.

describe("Test cases for Contact-us Page", () => {
    test("Should load contact-us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });

    it("Should load submit button", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});

