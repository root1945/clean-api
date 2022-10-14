import { ServerError, UnathorizedError } from '../../errors'
import { HttpResponse } from '../../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const serverError = (err: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(err.stack)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnathorizedError()
})
