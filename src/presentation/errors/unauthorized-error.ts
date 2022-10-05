export class UnathorizedError extends Error {
  constructor () {
    super('Unauthorized')
    this.name = 'UnathorizedError'
  }
}
