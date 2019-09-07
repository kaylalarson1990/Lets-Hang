import React from "react";
import { Home } from "./Home";
import styled from 'styled-components'
import * as renderer from "react-test-renderer";
import "jest-styled-components";

describe("Home", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
