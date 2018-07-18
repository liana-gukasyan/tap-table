import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import IconPrice025 from './IconPrice025'
import IconPrice033 from './IconPrice033'
import IconPrice040 from './IconPrice040'
import IconPrice050 from './IconPrice050'

const VolumeDiv = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  margin-right: 10px;
  font-size: 24px;
`

const TableLegendContainer = styled.div`
  display: flex;
  margin-left: 20px;
  padding-bottom: 5px;
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
          0.25
        </VolumeDiv>
        <VolumeDiv>
          <IconWrapper><IconPrice033/></IconWrapper>
          0.33
        </VolumeDiv>
        <VolumeDiv>
          <IconWrapper><IconPrice040/></IconWrapper>
          0.4
        </VolumeDiv>
        <VolumeDiv>
          <IconWrapper><IconPrice050/></IconWrapper>
          0.5
        </VolumeDiv>
      </TableLegendContainer>
    )
  }
}
