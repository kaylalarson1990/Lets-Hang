import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import 'jest-styled-components';

describe("Home", () => {
  it("should match to snapshot", () => {
    const component = <Home />
    const result = renderer.create(component);
    expect(result).toMatchSnapshot();
  });
});
