import React, { Component, Fragment } from "react";
import styled from "styled-components";

const VolumeSpan = styled.span`
  margin-right: 10px;
`

const TableLegendContainer = styled.div`
  margin-left: 20px;
`

export default class TableLegend extends Component {
  render() {
    return (
      <TableLegendContainer>
        <VolumeSpan>0.25 ml</VolumeSpan>
        <VolumeSpan>0.33 ml</VolumeSpan>
        <VolumeSpan>0.5 ml</VolumeSpan>
      </TableLegendContainer>
    )
  }
}
