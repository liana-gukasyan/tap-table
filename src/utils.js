import Joi from 'joi'

const itemSchema = Joi.object().keys({
  tapNumber: Joi.number().required(),
  titleFirstRow: Joi.string(),
  titleSecondRow: Joi.string(),
  style: Joi.string(),
  abv: Joi.string(),
  ibu: Joi.string(),
  price025: Joi.number(),
  price033: Joi.number(),
  price040: Joi.number(),
  price050: Joi.number(),
})

const schema = Joi.array().items(itemSchema)

export function validateModel(model) {
  return Joi.validate(model, schema)
}

export function emptyModel() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(n => {
    return {
      tapNumber: n,
    }
  })
}

export function getFileExtension(filename) {
  return filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
}
