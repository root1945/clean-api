import { LogErrorRepository } from '../../../../data/protocols/db/log-error-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    await MongoHelper.getCollection('errors').insertOne({
      stack,
      date: new Date()
    })
  }
}
