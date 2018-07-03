import React,{ Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import background from "../assets/img/jungle.jpg";

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
        <StyledTableCell key={data.price040}>{data.price040}</StyledTableCell>
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
            <StyledHeaderCell>0.4 ml</StyledHeaderCell>
            <StyledHeaderCell>0.5 ml</StyledHeaderCell>
          </tr>
          <TableRows data={this.props.data} />
        </tbody>
      </StyledTable>
    );
  }
}


TapTable.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        tapNumber: PropTypes.number,
        titleFirstRow: PropTypes.string,
        titleSecondRow: PropTypes.string,
        style: PropTypes.string,
        abvibu: PropTypes.string,
        price025: PropTypes.number,
        price033: PropTypes.number,
        price040: PropTypes.number,
        price050: PropTypes.number,
      }
    )
  ).isRequired
}
