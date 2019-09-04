import React from "react";
import { Home } from "./Home";
import styled from 'styled-components'
import * as renderer from "react-test-renderer";
import "jest-styled-components";

describe("ButtonWrapper", () => {
  it("should match snapshot", () => {
    const ButtonWrapper = styled.View`
      flex-direction: row;
      justify-content: space-evenly;
      width: 100%;
      margin-top: 5%;
      height: 100%;
    `;
    const tree = renderer.create(<ButtonWrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
