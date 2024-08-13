//import express, {json, urlencoded } from "express"
import { RegisterRoutes } from "../dist/routes";
import express, {json, urlencoded, Response as ExResponse, Request as ExRequest } from "express";
import swaggerUi from "swagger-ui-express";

export const app = express()

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../dist/swagger.json"))
  );
});
app.use(
  urlencoded({
    extended : true
}))

app.use(json())

RegisterRoutes(app)
  