//Unit Testing
import { render } from "@testing-library/react"
import RestaurantCard from "./components/RestaurantCard"
import MOCKDATA from "./components/mocks/RestaurantCard.json";
import "@testing-library/jest-dom";

test("Testing ResCard Component", () => {
    render(<RestaurantCard resData={MOCKDATA} />);

    const name = screen.getByText("Domino's Pizza");
    expect(name).toBeInTheDocument();
})