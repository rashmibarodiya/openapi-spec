import express, {json, urlencoded } from "express"
import { RegisterRoutes } from "../dist/routes";

export const app = express()

app.use(urlencoded({
    extended : true
}))

app.use(json())

RegisterRoutes(app);
app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${3000}`);
  });
  
  // It's important to export the app for testing purposes
  export default app;