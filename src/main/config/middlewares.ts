import { Express } from 'express'
import bodyParse from '../middlewares/body-parse'
import cors from '../middlewares/cors'

export default (app: Express): void => {
  bodyParse(app)
  cors(app)
}
