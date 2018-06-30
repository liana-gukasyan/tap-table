import React, { Component, Fragment } from "react";
import styled from "styled-components";

import TapTable from "./TapTable";
import TableLegend from "./TableLegend";

import background from "../assets/img/jungle.jpg";

const StyledMainScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  color: white;
`

export default class MainScreen extends Component {
  render() {
    return (
      <StyledMainScreen>
        <TapTable/>
        <TableLegend/>
      </StyledMainScreen>
    )
  }
}
