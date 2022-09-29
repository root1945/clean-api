import { MongoClient, Collection, ObjectId } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  getColletion (name: string): Collection {
    return this.client.db().collection(name)
  },

  async getValue (collection: Collection, insertedId: ObjectId): Promise<any> {
    const result = await collection.findOne({ _id: insertedId })
    return result
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id.toString() })
  }
}
