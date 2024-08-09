import express, {json, urlencoded } from "express"
import { RegisterRoutes } from "../dist/routes";
//const { RegisterRoutes } = require('./../routes')

export const app = express()

app.use(urlencoded({
    extended : true
}))

app.use(json())


  // It's important to export the app for testing purposes
  export default app;