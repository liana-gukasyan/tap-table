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
  position: fixed;
  bottom: 10px;
`

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`

export default class TableLegend extends Component {
  render() {
    return (
      <TableLegendContainer>
        <VolumeDiv>
          <IconWrapper><IconPrice025/></IconWrapper>
          0.25 ml
        </VolumeDiv>
        <VolumeDiv>
          <IconWrapper><IconPrice033/></IconWrapper>
          0.33 ml
        </VolumeDiv>
        <VolumeDiv>
          <IconWrapper><IconPrice040/></IconWrapper>
          0.4 ml
        </VolumeDiv>
        <VolumeDiv>
          <IconWrapper><IconPrice050/></IconWrapper>
          0.5 ml
        </VolumeDiv>
      </TableLegendContainer>
    )
  }
}
