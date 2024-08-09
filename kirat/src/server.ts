
import app from "./app"
//const { RegisterRoutes } = require('../routes'); // Import the routes from dist



const port = 3000

app.listen(`${port}` , () => {
    console.log("app is running on port "+ `${port}`)
})
