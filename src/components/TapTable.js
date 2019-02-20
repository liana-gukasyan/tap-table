import React,{ Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  &:first-child {
    margin-right: 36px;
  }
`

const StyledHeaderCell = styled.th`
  height: 40px;
  font-size: 14px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: right;
  color: #8FA29A;
  &:first-child {
    text-align: left;
  }
`

const StyledAbvibuCell = styled(StyledHeaderCell)`
  padding-left: 20px;
  min-width: 90px;
`

const StyledPriceCell = styled(StyledHeaderCell)`
  padding-left: 20px;
  min-width: 120px;
`

const StyledTableRow = styled.tr`
  border-bottom: 2px solid rgba(255,255,255,0.1);
  &:last-child {
    border-bottom: none;
  }
`

const StyledTableCell = styled.td`
  height: 85px;
  text-align: right;
  font-size: 16px;
  letter-spacing: 0.8px;
`

const NumberCell = styled(StyledTableCell)`
  font-family: GilroyExtraBold;
  padding: 0 18px 0 4px;
`

const TitleCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 6px;
  text-align: left;
  font-size: 18px;
  letter-spacing: 0.9px;
  max-width: 300px;
`

const SecondTitle = styled.div`
  font-family: 'gilroyLight';
  color: #A7A7A7;
  font-size: 14px;
  margin-top: 3px;
`

const StyledPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
  margin-bottom: 6px;
  &:last-child {
    margin-bottom: 0;
  }
`

const VolumeWrapper = styled.div`
  margin-right: 16px;
`

class TableRows extends React.Component {
  render() {
    const {
      data
    } = this.props

    return data.map((data) =>
      <StyledTableRow key={data.tapNumber}>
        {
          data.tapNumber ?
          <NumberCell key={data.tapNumber}>
            {data.tapNumber}
          </NumberCell>
          :
          <NumberCell/>
        }
        {
          data.titleFirstRow ?
          <StyledTableCell key={data.titleFirstRow + data.titleSecondRow}>
            <TitleCell style={{fontFamily: 'GilroyExtraBold'}}>
              {data.titleFirstRow}
              <SecondTitle>{data.titleSecondRow}</SecondTitle>
            </TitleCell>
          </StyledTableCell>
          :
          <StyledTableCell/>
        }
        {
          data.style ?
          <StyledTableCell key={data.style + data.tapNumber}>{data.style}</StyledTableCell>
          :
          <StyledTableCell/>
        }
        {
          data.abvibu ?
          <StyledTableCell key={data.abvibu + data.tapNumber} style={{paddingLeft: '20px'}}>{data.abvibu}</StyledTableCell>
          :
          <StyledTableCell/>
        }
        <StyledTableCell key={'price'} style={{paddingLeft: '20px'}}>
          {
            data.price025 ?
            <StyledPrice key={data.price025 + data.tapNumber}>
              <VolumeWrapper>0.25</VolumeWrapper>
              {data.price025 + 'р.'}
            </StyledPrice>
            :
            undefined
          }
          {
            data.price033 ?
            <StyledPrice key={data.price033 + data.tapNumber}>
              <VolumeWrapper>0.33</VolumeWrapper>
              {data.price033 + 'р.'}
            </StyledPrice>
            :
            undefined
          }
          {
            data.price040 ?
            <StyledPrice key={data.price040 + data.tapNumber}>
              <VolumeWrapper>0.4</VolumeWrapper>
              {data.price040 + 'р.'}
            </StyledPrice>
            :
            undefined
          }
          {
            data.price050 ?
            <StyledPrice key={data.price050 + data.tapNumber}>
              <VolumeWrapper>0.5</VolumeWrapper>
              {data.price050 + 'р.'}
            </StyledPrice>
            :
            undefined
          }
        </StyledTableCell>
      </StyledTableRow>
    )
  }
}

export default class TapTable extends Component {
  render() {
    return (
      <StyledTable>
        <tbody>
          <StyledTableRow>
            <StyledHeaderCell/>
            <StyledHeaderCell style={{textAlign: 'left'}}>
              Название/пивоварня
            </StyledHeaderCell>
            <StyledHeaderCell>Стиль</StyledHeaderCell> 
            <StyledAbvibuCell>ABV | IBU</StyledAbvibuCell>
            <StyledPriceCell>Объём | Цена</StyledPriceCell>
          </StyledTableRow>
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
