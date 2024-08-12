"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
//const { RegisterRoutes } = require('../routes'); // Import the routes from dist
const port = 3000;
app_1.app.listen(`${port}`, () => {
    console.log("app is running on port " + `${port}`);
});
