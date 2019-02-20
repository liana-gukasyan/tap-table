import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import NotificationSystem from 'react-notification-system'

import TapTable from './TapTable'
import FileSelector from './FileSelector'

import {emptyModel} from '../utils'

import gilroyLight from '../fonts/GilroyLight.otf'
import gilroyExtraBold from '../fonts/GilroyExtraBold.otf'

const StyledMainScreen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1F4434;
`

const StyledContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: white;
  @font-face {
    font-family: 'GilroyLight';
    src: url(${gilroyLight});
  }
  @font-face {
    font-family: 'GilroyExtraBold';
    src: url(${gilroyExtraBold});
  }
  font-family: 'GilroyLight';
  overflow: hidden;
`

const StyledTapTableContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 16px;
`

const notificationStyle = {
  NotificationItem: {
    DefaultStyle: {
      backgroundColor: '#080A19',
      opacity: 0.9,
      color: '#fff',
      boxShadow: 'none',
      fontSize: 15,
      fontWeight: 300,
    },

    info: {
      borderTop: '2px solid #1D74B5',
    },

    error: {
      borderTop: '2px solid #E04532',
    },
  },
  Dismiss: {
    info: {
      color: '#fff',
      backgroundColor: 'none',
    },

    error: {
      color: '#fff',
      backgroundColor: 'none',
    },
  }
}

export default class MainScreen extends Component {
  constructor() {
    super()
    const modelFromLocalStorage = localStorage.getItem('model')
    if (modelFromLocalStorage) {
      this.state = {
        model: JSON.parse(modelFromLocalStorage)
      }
    } else {
      setTimeout(_ => {
        this._notificationSystem.addNotification({
          message: '🤔 Для загрузки таблицы кранов из эксель-файла (xlsx/xls), кликните в зону самом верху страницы',
          position: 'tc',
          autoDismiss: 20,
          level: 'info',
        })
      }, 1000)
      this.state = {
        model: emptyModel()
      }
    }
  }

  onModelUpdate(data) {
    this.setState({model: data})
    this._notificationSystem.addNotification({
      message: 'Таблица обновлена 👍',
      position: 'tc',
      level: 'info',
      autoDismiss: 5,
    })
  }

  onModelParseError(error) {
    this._notificationSystem.addNotification({
      message: error,
      position: 'tc',
      autoDismiss: 10,
      level: 'error',
    })
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem
  }

  render() {
    return (
      <StyledMainScreen>
        <NotificationSystem ref='notificationSystem' style={notificationStyle}/>
        <StyledContentWrapper>
          <StyledTapTableContainer>
            <TapTable data={this.state.model.slice(0, 7)}/>
            <TapTable data={this.state.model.slice(7, 14)}/>
          </StyledTapTableContainer>
          <FileSelector
            onModelUpdate={data => this.onModelUpdate(data)}
            onModelParseError={error => this.onModelParseError(error)}/>
        </StyledContentWrapper>
      </StyledMainScreen>
    )
  }
}

const mockTaps1 = [{
  tapNumber: 1,
  titleFirstRow: 'Best beer',
  titleSecondRow: 'Rostov-on-Don',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: 'Ololo',
  titleSecondRow: 'Barcelona',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
},{
  tapNumber: 3,
  titleFirstRow: 'Another beer',
  titleSecondRow: 'Paris',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 1,
  titleFirstRow: 'Best beer',
  titleSecondRow: 'Rostov-on-Don',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: 'Ololo',
  titleSecondRow: 'Barcelona',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
},{
  tapNumber: 3,
  titleFirstRow: 'Another beer',
  titleSecondRow: 'Paris',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 1,
  titleFirstRow: 'Best beer',
  titleSecondRow: 'Rostov-on-Don',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: 'Ololo',
  titleSecondRow: 'Barcelona',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
}]

const mockTaps2 = [{
  tapNumber: 3,
  titleFirstRow: 'Another beer',
  titleSecondRow: 'Paris',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 1,
  titleFirstRow: 'Best beer',
  titleSecondRow: 'Rostov-on-Don',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: 'Ololo',
  titleSecondRow: 'Barcelona',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
},{
  tapNumber: 3,
  titleFirstRow: 'Another beer',
  titleSecondRow: 'Paris',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 3,
  titleFirstRow: 'Another beer',
  titleSecondRow: 'Paris',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
},{
  tapNumber: 1,
  titleFirstRow: 'Best beer',
  titleSecondRow: 'Rostov-on-Don',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 150,
  price040: 250,
  price050: 300,
},{
  tapNumber: 2,
  titleFirstRow: 'Ololo',
  titleSecondRow: 'Barcelona',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 100,
  price033: 200,
  price040: 250,
  price050: 300,
},{
  tapNumber: 3,
  titleFirstRow: 'Another beer',
  titleSecondRow: 'Paris',
  style: 'Tripel',
  abvibu: '8.2/N/A',
  price025: 50,
  price033: 250,
  price040: 250,
  price050: 500,
}]
