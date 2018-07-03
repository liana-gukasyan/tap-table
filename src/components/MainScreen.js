import React, { Component, Fragment } from "react";
import styled from "styled-components";

import TapTable from "./TapTable";
import TableLegend from "./TableLegend";
import FileSelector from "./FileSelector"

import background from "../assets/img/jungle.jpg";

const StyledMainScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  color: white;
`

const StyledTapTableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export default class MainScreen extends Component {
  constructor() {
    super()
    const modelFromLocalStorage = localStorage.getItem('model')
    if (modelFromLocalStorage) {
      this.state = {
        model: JSON.parse(modelFromLocalStorage)
      }
    } else {
      this.state = {
        model: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(n => {
          return {
            tapNumber: n,
          }
        })
      }
    }    
  }

  render() {
    return (
      <StyledMainScreen>
        <StyledTapTableContainer>
          <TapTable data={this.state.model.slice(0, 8)}/>
          <TapTable data={this.state.model.slice(8, 16)}/>
        </StyledTapTableContainer>
        <TableLegend/>
        <FileSelector onModelUpdate={data => this.setState({model: data})} />
      </StyledMainScreen>
    )
  }
}

const mockTaps1 = [{
  tapNumber: 1,
  titleFirstRow: "Best beer",
  titleSecondRow: "Rostov-on-Don",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: "Ololo",
  titleSecondRow: "Barcelona",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
},{
  tapNumber: 3,
  titleFirstRow: "Another beer",
  titleSecondRow: "Paris",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 1,
  titleFirstRow: "Best beer",
  titleSecondRow: "Rostov-on-Don",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: "Ololo",
  titleSecondRow: "Barcelona",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
},{
  tapNumber: 3,
  titleFirstRow: "Another beer",
  titleSecondRow: "Paris",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 1,
  titleFirstRow: "Best beer",
  titleSecondRow: "Rostov-on-Don",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: "Ololo",
  titleSecondRow: "Barcelona",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
}]

const mockTaps2 = [{
  tapNumber: 3,
  titleFirstRow: "Another beer",
  titleSecondRow: "Paris",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 1,
  titleFirstRow: "Best beer",
  titleSecondRow: "Rostov-on-Don",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: "Ololo",
  titleSecondRow: "Barcelona",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
},{
  tapNumber: 3,
  titleFirstRow: "Another beer",
  titleSecondRow: "Paris",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 3,
  titleFirstRow: "Another beer",
  titleSecondRow: "Paris",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 1,
  titleFirstRow: "Best beer",
  titleSecondRow: "Rostov-on-Don",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: "Ololo",
  titleSecondRow: "Barcelona",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
},{
  tapNumber: 3,
  titleFirstRow: "Another beer",
  titleSecondRow: "Paris",
  style: "Tripel",
  abvibu: "8.2/N/A",
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
}];
