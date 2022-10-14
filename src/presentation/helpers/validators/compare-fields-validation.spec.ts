import { InvalidParamError } from '../../errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('any_field', 'any_field_to_compare')
}

describe('CompareFieldsValidation', () => {
  it('Should return a InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ any_field: 'any_field', any_field_to_compare: 'wrong_field' })
    expect(error).toEqual(new InvalidParamError('Field does not match'))
  })

  it('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({ any_field: 'any_field', any_field_to_compare: 'any_field' })
    expect(error).toBeFalsy()
  })
})
