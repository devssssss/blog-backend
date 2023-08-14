import express, { Application } from "express"
import morgan from "morgan"
import helmet from "helmet"

const ExpressConfig = (): Application => {
  const app = express()
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use(helmet())
  app.use(morgan("dev"))

  return app
}

export default ExpressConfig