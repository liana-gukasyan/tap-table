import React from 'react'
import XLSX from 'xlsx'
import styled from "styled-components"

import {validateModel, getFileExtension} from '../utils'

const TopAbsolute = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 20px;
  cursor: pointer;
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
  width: 100%;
  height: 20px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
`


export default class FileSelector extends React.Component {
    handleChange(selectorFiles) {
      const f = selectorFiles[0]
      const ext = getFileExtension(f.name)
      if(ext !== 'xlsx' && ext !== 'xls') {
        this.props.onModelParseError(
          `TapTable умеет читать только табличные файлы с расширениями xlsx или xls, вы загрузили файл с расширением ${ext}.`
        )
        return
      }

      const reader = new FileReader()

      reader.onload = (e) => {
        let data = e.target.result
        data = new Uint8Array(data)
        const workbook = XLSX.read(data, {type: 'array'})
        const parsedModel = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1)

        const result = validateModel(parsedModel)

        if (result.error === null) {
          const model = parsedModel.map(m => {
            const abvibu = m.ibu !== 'N/A' ? `${m.abv} | ${m.ibu}` : `${m.abv} | –`
            return {
              tapNumber: Number(m.tapNumber),
              titleFirstRow: m.titleFirstRow,
              titleSecondRow: m.titleSecondRow,
              style: m.style,
              abvibu: abvibu,
              price025: Number(m.price025),
              price033: Number(m.price033),
              price040: Number(m.price040),
              price050: Number(m.price050),
            }
          })
          localStorage.setItem('model', JSON.stringify(model))
          this.props.onModelUpdate(model)
        } else {
          console.warn('parsing error', result)
          this.props.onModelParseError('TapTable не может прочитать ваш xls/xlsx файл! Мы ожидаем на входе файл определнной структуры, проверьте вашу таблицу и еще раз сверьтесь с образцом файла.')
        }
      }

      reader.readAsArrayBuffer(f)
    }

    render () {
      return <TopAbsolute>
        <FileLabel htmlFor="file"></FileLabel>
        <FileInput
          type="file"
          name="file"
          id="file"
          onInput={e => {
            this.handleChange(e.target.files)
          }}
          onClick={e => {
            e.target.value = null
          }}
        />
      </TopAbsolute>
    }
}
