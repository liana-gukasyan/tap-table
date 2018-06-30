import React, { Component, Fragment } from "react";
import styled from "styled-components";

import background from "../assets/img/jungle.jpg"

const StyledTable = styled.table`
  width: 100%;
  padding: 20px;
`

const StyledHeaderCell = styled.th`
  border-bottom: 1px solid white;
  border-left: 1px dotted white;
  &:first-child {
    text-align: left;
  }
  &:last-child {
    border-right: 1px dotted white;
  }
`

const StyledTableCell = styled.td`
  text-align: center;
  border-left: 1px dotted white;
  border-bottom: 1px dotted white;

  &:first-child {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  &:last-child {
    border-right: 1px dotted white;
  }
`

const OriginSpan = styled.span`
  font-size: 16px;
`

class TableRows extends React.Component {
  render() {
    const {
      data
    } = this.props;

    return data.map((data) =>
      <tr key={data.tapNumber}>
        <StyledTableCell key={data.titleFirstRow}>
          {data.titleFirstRow}
          <OriginSpan>({data.titleSecondRow})</OriginSpan>
        </StyledTableCell>
        <StyledTableCell key={data.style}>{data.style}</StyledTableCell>
        <StyledTableCell key={data.abvibu}>{data.abvibu}</StyledTableCell>
        <StyledTableCell key={data.price025}>{data.price025}</StyledTableCell>
        <StyledTableCell key={data.price033}>{data.price033}</StyledTableCell>
        <StyledTableCell key={data.price050}>{data.price050}</StyledTableCell>
      </tr>
    );
  }
}

export default class TapTable extends Component {
  render() {
    return (
      <StyledTable>
        <tbody>
          <tr>
            <StyledHeaderCell>Название/пивоварня</StyledHeaderCell>
            <StyledHeaderCell>Стиль</StyledHeaderCell> 
            <StyledHeaderCell>ABV/IBU</StyledHeaderCell>
            <StyledHeaderCell>0.25 ml</StyledHeaderCell>
            <StyledHeaderCell>0.33 ml</StyledHeaderCell>
            <StyledHeaderCell>0.5 ml</StyledHeaderCell>
          </tr>
          <TableRows data={mockTaps} />
        </tbody>
      </StyledTable>
    );
  }
}

const mockTaps = [{
  tapNumber: 1,
  titleFirstRow: "Best beer",
  titleSecondRow: "Rostov-on-Don",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 150,
  price050: 300,
}, {
  tapNumber: 2,
  titleFirstRow: "Ololo",
  titleSecondRow: "Barcelona",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 200,
  price050: 300,
}, {
  tapNumber: 3,
  titleFirstRow: "Another beer",
  titleSecondRow: "Paris",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 50,
  price033: 250,
  price050: 500,
}];
