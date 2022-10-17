import React from "react";
import {render, fireEvent} from "@testing-library/react"
import Counter from "./Counter";

describe("<Profile />", () => {
    it("matches snapshot", () => {
        const utils = render(<Counter />);
        expect(utils.container).toMatchSnapshot();
    });
    it("has a number and two buttons", () => {
        const utils = render(<Counter />);
        utils.getByText("0");
        utils.getByText("+1");
        utils.getByText("-1");
    });
});