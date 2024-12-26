//Unit Testing
import { render } from "@testing-library/react"
import Header from "../Header";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

test("Testing header componenet", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const testingButton = screen.getByRole("button");
    expect(testingButton).toBeInTheDocument();
});