import cors from 'cors'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(cors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
    exposedHeaders: '*',
    credentials: true,
    maxAge: 3600
  }))
}
