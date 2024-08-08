"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const { RegisterRoutes } = require('../routes'); // Import the routes from dist
RegisterRoutes(app_1.default);
const port = 3000;
app_1.default.listen(`${port}`, () => {
    console.log("app is running on port " + `${port}`);
});
exports.default = app_1.default;
