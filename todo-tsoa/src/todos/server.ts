
import app from "./app"
const { RegisterRoutes } = require('../routes'); // Import the routes from dist

RegisterRoutes(app);

const port = 3000

app.listen(`${port}` , () => {
    console.log("app is running on port "+ `${port}`)
})
export default app