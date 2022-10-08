import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredFieldValidation', () => {
  it('Should return a MissingParamError if validation fails', () => {
    const sut = new RequiredFieldValidation('any_field')
    const error = sut.validate({ name: 'any_name' })
    expect(error).toEqual(new MissingParamError('any_field'))
  })

  it('Should not return if validation succeeds', () => {
    const sut = new RequiredFieldValidation('any_field')
    const error = sut.validate({ any_field: 'any_name' })
    expect(error).toBeFalsy()
  })
})
