import express, {json, urlencoded } from "express"
export const app = express()

app.use(urlencoded({
    extended : true
}))

app.use(json())


  // It's important to export the app for testing purposes
  export default app;