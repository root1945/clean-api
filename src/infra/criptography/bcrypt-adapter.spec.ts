import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  },
  async compare (): Promise<boolean> {
    return new Promise(resolve => resolve(true))
  }
}))

const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(12)
}

describe('Bcrypt Adapter', () => {
  it('Should call hash with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.hash('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', 12)
  })

  it('Should return a hash on success', async () => {
    const sut = makeSut()
    const hash = await sut.hash('any_value')
    expect(hash).toBe('hash')
  })

  it('Should throw if bcrypt throws', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => {
      throw new Error()
    })
    const promise = sut.hash('any_value')
    await expect(promise).rejects.toThrow()
  })

  it('Should call compare with correct values', async () => {
    const sut = makeSut()
    const compareSpy = jest.spyOn(bcrypt, 'compare')
    await sut.compare('any_value', 'any_hash')
    expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_hash')
  })

  it('Should return true when compare succeeds', async () => {
    const sut = makeSut()
    const isValid = await sut.compare('any_value', 'any_hash')
    expect(isValid).toBe(true)
  })

  it('Should return false when compare fails', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => {
      return new Promise(resolve => resolve(false))
    })
    const isValid = await sut.compare('any_value', 'any_hash')
    expect(isValid).toBe(false)
  })
})
