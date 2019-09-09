import React from "react";
import { shallow } from "enzyme";
import { Profile } from "./Profile";

describe("Profile", () => {
  it("should match to snapshot", () => {
    const component = shallow(<Profile />);
    expect(component).toMatchSnapshot();
  });
});
