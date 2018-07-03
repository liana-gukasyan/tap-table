import React from 'react'
import XLSX from 'xlsx'
import styled from "styled-components"

const TopAbsolute = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 15px;
  height: 15px;
`

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const FileLabel = styled.label`
  display: block;
  width: 15px;
  height: 15px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
`


export default class FileSelector extends React.Component {
    handleChange(selectorFiles) {
      const f = selectorFiles[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        let data = e.target.result
        data = new Uint8Array(data)
        const workbook = XLSX.read(data, {type: 'array'})
        const parsedModel = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1)
        const model = parsedModel.map(m => {
          return {
            tapNumber: Number(m.tapNumber),
            titleFirstRow: m.titleFirstRow,
            titleSecondRow: m.titleSecondRow,
            style: m.style,
            abvibu: `${m.abv}/${m.ibu}`,
            titleSecondRow: m.titleSecondRow,
            price025: Number(m.price025),
            price033: Number(m.price033),
            price040: Number(m.price040),
            price050: Number(m.price050),
            price025: Number(m.price025),
          }
        })
        localStorage.setItem('model', JSON.stringify(model))
        this.props.onModelUpdate(model)
      }

      reader.readAsArrayBuffer(f)
    }

    render () {
      return <TopAbsolute>
        <FileLabel htmlFor="file"></FileLabel>
        <FileInput type="file" name="file" id="file" onChange={ (e) => this.handleChange(e.target.files) } />
      </TopAbsolute>
    }
}
