import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";
describe("<Profile />", () => {
    it("matches snapshot", () => {
        const utils = render(<Profile username="changwookim53" name="김창우" />);
        expect(utils.container).toMatchSnapshot();
    });
    it("shows the props correctly", () => {
        const utils = render(<Profile username="changwookim53" name="김창우" />);
        utils.getByText("changwookim53");
        utils.getByText("(김창우)");
        // utils.getByText("changwookim53 (김창우)");
    });
});

// 2개의 테스트를 it으로 표현하여 넣었다.
// react가 동작되는 것이 머릿속으로 그려져야 한다./