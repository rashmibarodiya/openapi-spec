import express, {json, urlencoded } from "express"
import { RegisterRoutes } from "../dist/routes";


export const app = express()

app.use(
  urlencoded({
    extended : true
}))

app.use(json())

RegisterRoutes(app)
  // It's important to export the app for testing purposes
  