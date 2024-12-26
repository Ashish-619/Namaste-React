//Unit Testing
import Sum from "../Sum";

test("Testing function to test sum of 2 number function", () => {
    const result = Sum(3, 4);
    //assertion
    expect(result).toBe(7);
})