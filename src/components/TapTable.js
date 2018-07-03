import React,{ Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import IconPrice025 from "./IconPrice025";
import IconPrice033 from "./IconPrice033";
import IconPrice040 from "./IconPrice040";
import IconPrice050 from "./IconPrice050";

import background from "../assets/img/jungle.jpg";

const StyledTable = styled.table`
  width: 100%;
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
  height: 70px;
  text-align: center;
  border-left: 1px dotted white;
  border-bottom: 1px dotted white;

  &:first-child {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &:last-child {
    border-right: 1px dotted white;
  }
`

const StyledPrice = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
`

const OriginSpan = styled.span`
  font-size: 16px;
`

const IconWrapper = styled.div`
  width: 14px;
  height: 14px;
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
        <StyledTableCell key={'price'}>
          <StyledPrice key={data.price025}>
            <IconWrapper><IconPrice025/></IconWrapper>
            {data.price025 + ' р.'}
          </StyledPrice>
          <StyledPrice key={data.price033}>
            <IconWrapper><IconPrice033/></IconWrapper>
            {data.price033 + ' р.'}
          </StyledPrice>
          <StyledPrice key={data.price040}>
            <IconWrapper><IconPrice040/></IconWrapper>
            {data.price040 + ' р.'}
          </StyledPrice>
          <StyledPrice key={data.price050}>
            <IconWrapper><IconPrice050/></IconWrapper>
            {data.price050 + ' р.'}
          </StyledPrice>
        </StyledTableCell>
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
            <StyledHeaderCell>Цена</StyledHeaderCell>
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
