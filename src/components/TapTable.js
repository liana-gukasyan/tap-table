import React,{ Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IconPrice025 from './IconPrice025'
import IconPrice033 from './IconPrice033'
import IconPrice040 from './IconPrice040'
import IconPrice050 from './IconPrice050'

import background from '../assets/img/jungle.jpg';

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
`

const StyledHeaderCell = styled.th`
  height: 40px;
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
  height: 64px;
  text-align: center;
  font-size: 16px;
  border-left: 1px dotted white;
  border-bottom: 1px dotted white;

  &:last-child {
    border-right: 1px dotted white;
  }
`

const TitleCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6px;
  text-align: left;
  font-size: 22px;
`

const StyledPrice = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  padding: 0 2px;
`

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
`

class TableRows extends React.Component {
  render() {
    const {
      data
    } = this.props

    return data.map((data) =>
      <tr key={data.tapNumber}>
        {
          data.titleFirstRow ?
          <StyledTableCell key={data.titleFirstRow}>
            <TitleCell>
              {data.tapNumber + '. ' + data.titleFirstRow}
              <span>{data.titleSecondRow}</span>
            </TitleCell>
          </StyledTableCell>
          :
          <StyledTableCell/>
        }
        {
          data.style ?
          <StyledTableCell key={data.style}>{data.style}</StyledTableCell>
          :
          <StyledTableCell/>
        }
        {
          data.abvibu ?
          <StyledTableCell key={data.abvibu}>{data.abvibu}</StyledTableCell>
          :
          <StyledTableCell/>
        }
        <StyledTableCell key={'price'}>
          {
            data.price025 ?
            <StyledPrice key={data.price025}>
              <IconWrapper><IconPrice025/></IconWrapper>
              {data.price025 + ' р.'}
            </StyledPrice>
            :
            <StyledPrice/>
          }
          {
            data.price033 ?
            <StyledPrice key={data.price033}>
              <IconWrapper><IconPrice033/></IconWrapper>
              {data.price033 + ' р.'}
            </StyledPrice>
            :
            <StyledPrice/>
          }
          {
            data.price040 ?
            <StyledPrice key={data.price040}>
              <IconWrapper><IconPrice040/></IconWrapper>
              {data.price040 + ' р.'}
            </StyledPrice>
            :
            <StyledPrice/>
          }
          {
            data.price050 ?
            <StyledPrice key={data.price050}>
              <IconWrapper><IconPrice050/></IconWrapper>
              {data.price050 + ' р.'}
            </StyledPrice>
            :
            <StyledPrice/>
          }
        </StyledTableCell>
      </tr>
    )
  }
}

export default class TapTable extends Component {
  render() {
    return (
      <StyledTable>
        <tbody>
          <tr>
            <StyledHeaderCell style={{paddingLeft:'6px'}}>
              Название/пивоварня
            </StyledHeaderCell>
            <StyledHeaderCell>Стиль</StyledHeaderCell> 
            <StyledHeaderCell>ABV/IBU</StyledHeaderCell>
            <StyledHeaderCell>Цена</StyledHeaderCell>
          </tr>
          <TableRows data={this.props.data} />
        </tbody>
      </StyledTable>
    )
  }
}


TapTable.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        tapNumber: PropTypes.number.isRequired,
        titleFirstRow: PropTypes.oneOfType([null, PropTypes.string]),
        titleSecondRow: PropTypes.oneOfType([null, PropTypes.string]),
        style: PropTypes.oneOfType([null, PropTypes.string]),
        abvibu: PropTypes.oneOfType([null, PropTypes.string]),
        price025: PropTypes.oneOfType([null, PropTypes.number]),
        price033: PropTypes.oneOfType([null, PropTypes.number]),
        price040: PropTypes.oneOfType([null, PropTypes.number]),
        price050: PropTypes.oneOfType([null, PropTypes.number]),
      }
    )
  )
}
