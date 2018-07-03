import React, { Component, Fragment } from "react";
import styled from "styled-components";

import IconPrice025 from "./IconPrice025";
import IconPrice033 from "./IconPrice033";
import IconPrice040 from "./IconPrice040";
import IconPrice050 from "./IconPrice050";

const VolumeDiv = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin-right: 10px;
`

const TableLegendContainer = styled.div`
  display: flex;
  margin-left: 20px;
`

export default class TableLegend extends Component {
  render() {
    return (
      <TableLegendContainer>
        <VolumeDiv>
          <IconPrice025/>
          0.25 ml
        </VolumeDiv>
        <VolumeDiv>
          <IconPrice033/>
          0.33 ml
        </VolumeDiv>
        <VolumeDiv>
          <IconPrice040/>
          0.4 ml
        </VolumeDiv>
        <VolumeDiv>
          <IconPrice050/>
          0.5 ml
        </VolumeDiv>
      </TableLegendContainer>
    )
  }
}
